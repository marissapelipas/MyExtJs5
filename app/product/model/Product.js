Ext.define('Test.product.model.Product', {
	extend : 'Ext.data.Model',
	requires : ['Test.product.model.Detail'],
	fields : [ {
		name : 'id',
		type : 'string'
	}, {
		name : 'code',
		type : 'string'
	}, {
		name : 'name',
		type : 'string'
	}, {
		name : 'desc',
		type : 'string'
	}

	],
	hasMany : [ {
		name : 'details',
		model : 'Test.product.model.Detail' 
	} ]


});