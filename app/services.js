'use strict';

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
