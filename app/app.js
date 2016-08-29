'use strict';

var app = angular.module('phs_downloader');

app.controller('appController', ['screen', function(screen){
	screen.show('./index.html');
}]);

app.controller('downloadController', ['downloadService', function(downloadService){
	var vm = this;
	vm.downloadAll = downloadService.downloadAll();
}]);

app.directive('ngHeader', function(){
	return {
		templateUrl: './partials/_header.html',
		controller: "HeaderController as HDC"
	};
});

app.service('downloadService', ['$http',function($http){
	var sv = this;
	sv.listAll = [];
	sv.downloadAll = function(){
		$http.get('https://philhendrie.s3.amazonaws.com')
		.then(function(data){
			sv.listAll.length = 0;
			for (var i = 0; i < data.contents.length; i++){
				sv.listAll.push(data.key[i]);
			}
		})
		.catch(function(err){
			console.log(err);
		});
	};
}]);

module.exports = app;
