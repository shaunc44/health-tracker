/*Global Backbone */
var App = App || {};

(function () {

	// Create Add food View
	App.Views.AddFood = Backbone.View.extend({
		el: '#addFood',

		// Fire event when element with id 'foodSubmit' is clicked
		events: {
			'click #foodSubmit' : 'submit'
		},

		submit: function(e) {
			e.preventDefault();
			// Get value from selected food
			var newFoodName = $('#foodName').text().toString();
			var newFoodCal = parseInt($('#foodCal').text());

			// Check if food calorie is a number; If it isn't then return
			if (isNaN(newFoodCal)) {
				return;
			}

			// Add food model with above data to the collection
			var food = new App.Models.Food({title: newFoodName, calorie: newFoodCal}, {validate: true});
			this.collection.add(food);
			// Add to localstorage
			food.save();
		}
	});


	// Create Foods Collection View
	App.Views.Foods = Backbone.View.extend({
		tagName: 'ul',
		className: 'selected-result',

		// listen to collection add event. Then call a method to create an element and append to the DOM.
		initialize: function(){
			this.collection.on('add', this.addOne, this);
		},
		// Method to render unordered list of selected food. Use for initiating the app with data from localstorage
		render: function(){
			this.collection.each(this.addOne, this);
			return this;
		},
		// Method to add a new model and append to the DOM.
		addOne: function(food){
			$('#resultAlert').hide();
			var foodView = new App.Views.Food ({model: food});
			this.$el.append(foodView.render().el);
		}
	});


	// Create Sum Calorie Total View
	App.Views.Total = Backbone.View.extend({
		el: '#total',

		initialize: function(){
			this.render();
			// listen to update event on collection. If there's an update then re-render this view
			this.collection.on('update', this.render, this);
		},

		render: function(){
			var total = 0;
			// Loop through collection item and add it's calorie to total calorie
			this.collection.each(function(elem){
				total += parseInt(elem.get('calorie'));
			}, this);

			// Show total calories
			this.$el.text(total);

			//this.$el(total);

			// Convert total to number with commas
			/*
			function formatTotal (num) {
				return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
			}
			var formattedTotal = formatTotal(this);
			return formattedTotal;
			*/

			return this;
		}
	});
})();









