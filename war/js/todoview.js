var app = app || {};

(function ($) {
	
	console.log("view initisted")
	
	app.TodoView = Backbone.View.extend({
		//... is a list tag.
		tagName:  '.todo-list',
		
		//el: '.datainput',
		
		
		
		model: new app.todo(),
		
		initialize : function(){
			
			this.template = _.template($('#item-template').html())
		
		},
//		events: {
//
//			'keypress .new-todo': 'createtOnEnter'
//
//		},
		
		
		render: function (text) {
		console.log("in render function");

			this.$el.html(this.template(this.model.toJSON()));

			this.$input = this.$('.edit');
			return this;
//		var self = this;
//		this.$el.html('');
//			_.each(this.model.toArray(), function(demo){
//				self.$el.append(new app.TodoView({model : demo}).render().$el);
//				
//			});
//		
		},

		
		
//		createtOnEnter : function(e){
//			console.log("enter");
//			
//				if (e.keyCode == 13) {
//				var text = $(".new-todo").val().trim();
////					console.log("da");
//				demo = new app.todo({
//					title: $(".new-todo").val().trim(),
//					//completed: false
//				});
//				$(".new-todo").val("");
//			  console.log(demo);
////			  app.collection.add(demo);
//			  this.render({model: demo});
//				}
//				
//				
				
				
		}
});

	//new app.TodoView();
})(jQuery);
