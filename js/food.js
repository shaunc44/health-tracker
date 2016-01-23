$(function() {

	// Create a model for the foods
	var Food = Backbone.Collection.extend({
		//url: '/food'
		defaults: {
			foodName: "Banana",
			calories: 0
		}
	});

	// Create a collection of foods
	var FoodList = Backbone.Collection.extend({

		// Hold objects of the food model
		model: Food
	});

	// Prefill the collection with some foods.
	var foods = new FoodList([
		new Food({ foodName: 'Almond', calories: 100}),
		new Food({ foodName: 'Orange', calories: 150})
	]);

	// This view turns the Food model into HTML.  Will create LI elements.
	var FoodView = Backbone.View.extend({
		tagName: 'Li',
		events: {
			'click': 'toggleService'
		},

		initialize: function(){
			// Set up event listeners. The change backbone event
			// is raised when a property changes (like the checked field)
			this.listenTo(this.model, 'change', this.render);
		},

		render: function(){
			// Create the HTML
			this.$el.html()
			this.$('input').prop()
			// Returning the object is good practice tht makes chaining possible
			return this;
		}
	})


});
