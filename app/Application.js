Ext.application({
	
    name: 'Test',

    controllers: [
        'Test.product.controller.Product'
    ],
    
    autoCreateViewport: 'Test.product.view.ProductDeck',    
    
    launch: function () {
        try {
        	//
        } catch (e) { }
    }
});