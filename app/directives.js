'use strict';

app.directive('ngHeader', function(){
	return {
		templateUrl: './partials/_header.html',
		controller: "headerController as HDC"
	};
});
