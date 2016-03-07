/*Global Backbone */
var App = App || {};

(function () {

	// Create Food Item Model View
	App.Views.Food = Backbone.View.extend({
		tagName: 'li',
		className: 'selected-item',

		// Set up template for later use
		template: App.Helper.template('foodsListTemplate'),

		// Listen for the destroy event; set context to this model
		initialize: function(){
			this.model.on('destroy', this.remove, this);
		},

		// When the element ".delete" is clicked call the destroy method
		events: {
			'click .delete' : 'destroy'
		},

		// Render this model by parsing the object to the template
		render: function(){
			var template = this.template(this.model.toJSON());
			this.$el.html(template);
			return this;
		},

		// Method to destroy the model
		destroy: function(){
			this.model.destroy();
		},

		// Method to remove the element from the DOM
		remove: function(){
			// If no food element then prompt user to add food.
			if (this.$el.siblings().length === 0) {
				$('#resultAlert').show();
			}
			this.$el.remove();
		}
	});

})();