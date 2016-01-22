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

	// Prefil the collection with some foods.
	var foods = new FoodList([
		new Food({ foodName: 'Almond', calories: 100}),
		new Food({ foodName: 'Orange', calories: 150})
	])

});
