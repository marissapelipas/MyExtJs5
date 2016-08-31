Ext.define('Test.product.view.ProductDetailPanel', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.productDetailPanel',
	id : 'productDetailPanel',
	store : 'Test.product.store.Details',
	columns : [ {
		xtype : 'rownumberer'
	}, {
		dataIndex : 'code',
		text : 'Name',
		width : 200,
		editor : {
			allowBlank : false
		}
	}, {
		dataIndex : 'value',
		text : 'Value',
		width : 300,
		editor : {
			allowBlank : false
		}
	} ],
	plugins : [ {
		ptype : 'cellediting',
		clicksToEdit : 2
	} ],

	tbar : [ {
		text : 'Add',
		itemId : 'addDetailBtn',
		action : 'addDetail'
	} ]
});
