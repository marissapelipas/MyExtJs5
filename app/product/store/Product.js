Ext.define('Test.product.store.Product', {
	extend : 'Ext.data.Store',
	model : 'Test.product.model.Product',
	autoLoad: true,
	storeId: 'productStore',
	proxy: {
        type: 'ajax',
        url : 'app/products.json',
        reader: 'json'
    },
    
});
