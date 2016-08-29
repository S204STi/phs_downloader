'use strict';

app.controller('appController', ['screen', function(screen){
	screen.show('./index.html');
}]);

app.controller('headerController', ['downloadService', function(downloadService){
	var vm = this;
	vm.downloadAll = downloadService.downloadAll();
}]);
