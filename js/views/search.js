/*Global Backbone */
var App = App || {};

(function () {

	// Create Search Result List
	App.Views.SearchResult = Backbone.View.extend({

		// Cache common elements used in this view
		element: {
			searchBtn: $('#searchBtn'),
			searchKey: $('#searchfield'),
			searchformAlert: $('#searchformAlert')
		},

		initialize: function() {
			var self = this;
			this.element.searchBtn.on('click', function(e){
				e.preventDefault();
				// Prepare the search word
				var keyword = $.trim(self.element.searchKey.val()).toLowerCase();
				// Check if user provides a valid search word
				if (!keyword) {
					self.element.searchformAlert.text('Please insert search keyword.');
					return;
				}
				// Remove the message that tells user to type a search word
				self.element.searchformAlert.text('');
				// Firing an AJAX request
				self.getAJAX(keyword);
			});
		},

		getAJAX: function(keyword){
			var self = this;
			var searchUL = $('.search-result');
			searchUL.html('<p>Now Loading...</p>');

			$.ajax({
				type: 'GET',
				dataType: 'json',
				cache: true,
				url: 'https://api.nutritionix.com/v1_1/search/'+ keyword +
				'?results=0%3A10&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Cnf_calories&appId=b43c65b0&appKey=80f926683602d6e1f396a38fb8fb3895'
			}).done(function(data) {
				var food;
				var addBtn = $('#foodSubmit');
				var searchItemHTML = '';

				// Notify the user that the search word is invalid
				if (data.hits.length <= 0) {
					var searchNotfound = '<p>Unable to locate food by the name of "'
						+ keyword + '".  Please enter a valid food.</p>';
					searchUL.html(searchNotfound);
					return;
				}

				// Iterate through each food object and get the data from it
				for (var i = 0; i < data.hits.length; i++) {
					searchItemHTML += '<li class="searchItem"><span class="searchName">' + data.hits[i].fields.item_name +
						', ' + data.hits[i].fields.brand_name +
						'</span><span class="searchCal">' +
						Math.round(data.hits[i].fields.nf_calories) +
						' Cal. </span></li>';
				}

				// Update the DOM
				searchUL.html(searchItemHTML);
				var searchItem = $('.searchItem');
				// If user clicks on targeted element then acquire the element's value
				// Food is clicked in the results and then uploaded to ADD FOOD
				searchItem.on('click', function(){
					// addBtn = #foodSubmit
					addBtn.prop('disabled', false);
					var name = $(this).find('.searchName').text();
					var cal = $(this).find('.searchCal').text();
					$('#foodName').text(name);
					$('#foodCal').text(cal);
					return;
				});
			}).fail(function(){
				// If AJAX request fails then notify the user.
				searchUL.html('<p>There is an error locating your food information. Please try again later.</p>');
			});
		}
	});
})();
