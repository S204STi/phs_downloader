'use strict';

app.directive('ngHeader', function(){
	return {
		templateUrl: './partials/_header.html',
		controller: "headerController as HDC"
	};
});

app.directive('ngFooter', function(){
	return {
		templateUrl: './partials/_footer.html'
	};
});
