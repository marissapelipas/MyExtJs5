Ext.define('Test.product.controller.Product', {
	extend : 'Ext.app.Controller',
	views : [ 'Test.product.view.ProductDeck' ],

	models : [ 'Test.product.model.Product' ],
	stores : [ 'Test.product.store.Product', 'Test.product.store.Details' ],

	refs : [ {
		ref : 'productDeck',
		selector : '#productDeck'
	}, {
		ref : 'productListPanel',
		selector : '#productListPanel'
	}, {
		ref : 'productDetailPanel',
		selector : '#productDetailPanel'
	} ],
	//

	init : function() {
		this.control({
			'#productListPanel' : {
				itemclick : this.productClicked,
				canceledit : this.cancelProduct,
				edit : this.updateProduct,
				beforeedit : this.beforeProductEdit,
			},
			'#productDetailPanel' : {
				//beforeedit : this.beforeProductDtlEdit,
			},
			'#productDetailPanel button[action=addDetail]' : {
				click : this.addDetail
			},
			'#productListPanel button[action=addProduct]' : {
				click : this.addProduct
			}
		});
	},
	
	isProductItemClicked: false,
	
	beforeProductDtlEdit : function(editor, ctx, opts) {
		//alert('beforeProductDtlEdit ' + this.isProductItemClicked);
		return !this.isProductItemClicked; 
	},

	beforeProductEdit : function(editor, ctx, opts) {
		//alert('beforeProductEdit');
		this.isProductItemClicked = true;
		
		var addDetailBtn = this.getProductDetailPanel().down('#addDetailBtn');
		
		console.log(addDetailBtn);
		
		//addDetailBtn.disable();
		
		return true;
	},	
	
	productClicked : function(vwRef, record, item, index, e, eOpts) {		
		//var newAttrStore = Ext.create('Test.product.store.Details');
		//newAttrStore.add(record.attributes().getRange());
		//this.getProductListPanel().getStore()['_prevAttribs'] = newAttrStore;
		
		this.getProductDetailPanel().setStore(record.details());
	},

	addDetail : function() {
		var r = Ext.create('Test.product.model.Detail', {
			code : '',
			value : ''
		});
		var count = this.getProductDetailPanel().getStore().getCount();
		this.getProductDetailPanel().getStore().insert(count, r);
	},

	updateProduct : function() {
		//alert('update');
		
		this.isProductItemClicked = false;
		
		var addDetailBtn = this.getProductDetailPanel().down('#addDetailBtn');
		
		//console.log(addDetailBtn);
		
		//addDetailBtn.enable();		
	},

	cancelProduct : function(editor, ctx) {
		//alert('cancel');
		
		this.isProductItemClicked = false;
		
		var addDetailBtn = this.getProductDetailPanel().down('#addDetailBtn');
		
		//console.log(addDetailBtn);
		
		//addDetailBtn.enable();		
		
		//ctx.record.reject();

		//var prevAttrStore = ctx.grid.getStore()['_prevAttribs'];
		//var curAttrStore = this.getProductDetailPanel().getStore();

		//curAttrStore.clearData();
		//curAttrStore.removeAll();

		// curAttrStore.add(prevAttrStore.getRange());
		//this.getProductDetailPanel().setStore(prevAttrStore);
		// ctx.grid().getStore().rejectChanges();
	},

	addProduct : function() {
		var r = Ext.create('Test.product.model.Product', {
			id : '', code : '', name : '',
			desc : ''
		});
		var count = this.getProductListPanel().getStore().getCount();
		this.getProductListPanel().getStore().insert(count, r);
	},
	
	getListView : function() {
		var l = this.getProductDeck();
		console.log('>>>getProductDeck =' + l);
		return l;
	},

	onLaunch : function(a) {
		//console.log('>>>ProductListPanel =' + this.getProductListPanel());
		//console.log(Ext.data.StoreManager.lookup('productDtlStore'));
	}
});