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
			this.$el.html('<input type="checkbox" value="1" name="' +
				this.model.get('title') + '" /> ' +
				this.model.get('title') + '<span>$' +
				this.model.get('price') + '</span>');
			this.$('input').prop('checked', this.model.get('checked'));

			// Returning the object is a good practice
			// that makes chaining possible
			return this;
		}

		toggleService: function(){
			this.model.toggle();
		}
	});

	var App = Backbone.View.extend({
		// Base the view on an existing element
		el: $('#main'),

		initialize: function(){

			// Cache these selectors
			this.total = $('#total span');
			this.list = $('#services');

			// Listen for the change event on the collection.
			// This is equivalent to listening on every one of the 
			// service objects in the collection.
			this.listenTo(services, 'change', this.render);

			// Create views for every one of the services in the
			// collection and add them to the page

			services.each(function(service){

				var view = new ServiceView({ model: service });
				this.list.append(view.render().el);

			}, this);	// "this" is the context in the callback
		},

		render: function(){

			// Calculate the total order amount by agregating
			// the prices of only the checked elements

			var total = 0;

			_.each(services.getChecked(), function(elem){
				total += elem.get('price');
			});

			// Update the total price
			this.total.text('$'+total);

			return this;
		}
	});

	new App();

})

//});
