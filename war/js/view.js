var Model = Backbone.Model.extend({
	
	default:
		{
		id: "",
		title: ""
		
		},
		
		initialize: function(){
			console.log("in Model");
		},
		
	//urlRoot: "/model"
	
});

var Collection = Backbone.Collection.extend({
	
	initialize: function(){
		console.log("in Collection");
	}
});

var model1 = new Model({
	
	id: 1,
	title: "Model1"
});
var model2 = new Model({
	
	id: 2,
	title: "Model2"
});

var myCollection = new Collection([
	model1, model2
]);

var model3 = new Model({
	
	id: 3,
	title: "Model3"
});

var model4 = new Model({
	
	id: 4,
	title: "Model4"
});

myCollection.add(model3);

myCollection.add(model4, {at:2});
