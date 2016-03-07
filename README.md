##HEALTH TRACKER
####*UDACITY - FRONT-END WEB DEVELOPER NANODEGREE*
#####PROJECT 5-2
In this project I designed a website that tracks calories of various
foods entered into the search box. The site then tabulates total
calories of all foods entered.

=================================================================



###OVERVIEW OF TESTS
-----------------------------------------------------------------
1.	The first tests determine whether the feeds are defined and
	if they have URLs and names.
2.	The next set of tests examine whether the menu changes
	visiblity when clicked.
3.	Lastly, I test that the container has at least one feed and
	also confirm that new feeds are loaded.


###TEST INSTRUCTIONS
-----------------------------------------------------------------
#####RSS FEEDS:
	Test 1:	Comment out the 'allFeeds' array in app.js. This will
			cause the test to fail while prompting the error 
			message, "Expected 0 not to be 0".
	Test 2:	Empty one of the URLs in the 'allFeeds' array in
			app.js. The test will fail with an error message of
			"Expected 0 not to be 0".
	Test 3:	This time empty one of the names in the 'allFeeds' array
			in app.js. The test will fail with an error message of
			"Expected 0 not to be 0".
#####THE MENU:
	Test 4:	In the index.html file, delete the menu-hidden class.
			In the webpage, the menu will not be hidden by
			default and you will see an error message of
			"Expected false to be true".
	Test 5:	In the index.html file, delete the menu-icon-link
			class. In the webpage, the menu will not toggle
			open or close and you will see an error message of
			"Expected true to be false".
#####INITIAL ENTRIES:
	Test 6:	Delete the 'entry' class in index.html. The test
			will fail with an error message of "Expected 0 to
			be greater than 0".
#####NEW FEED SELECTION:
	Test 7:	For the last test, please go app.js and comment out
			the content of the loadFeed() function which will
			cause the New Feed Selection test to fail with an
			error message of "Error: Timeout".


###INSTALLATION
-----------------------------------------------------------------
Open index.html in your favorite web browser, such as Chrome or
Firefox, or visit the live [website.]
(shaunc44.github.io/Feed-Reader-Testing/) Cheers!


###SUPPORT
-----------------------------------------------------------------
If you're having issues loading the website please email Shaun
at shauncox44@gmail.com