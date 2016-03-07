/*Global Backbone */
var App = App || {};

(function () {

	// Create Foods Collection with Local Storage
	App.Collections.Foods = Backbone.Collection.extend({
		model: App.Models.Food,
		// Implement localstorage
		localStorage: new Backbone.LocalStorage('FoodsLocal')
	});

})();