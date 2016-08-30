'use strict';

app.service('downloadService', ['$http', function($http) {
    var sv = this;
    sv.listAll = [];
    sv.url = "https://philhendrie.s3.amazonaws.com/";
    sv.nextPage = '';
    sv.parse = function(result, parser, xmlDoc) {
			console.log("entering sv.parse");
				parser = new DOMParser();
        xmlDoc = parser.parseFromString(result.data, "text/xml").getElementsByTagName('Key');
        for (var i = 0; i < xmlDoc.length; i++) {
            var url = xmlDoc[i].innerHTML;
            sv.listAll.push(sv.url + encodeURIComponent(url));
        }
				console.log(sv.listAll.slice(-1)[0]);
				if(sv.nextPage[0] === sv.listAll.slice(-1)[0]){
					console.log("sv.nextPage", sv.nextPage[0]);
					//if there are no new entries to sort, kick out
					return;
				}
				else {
				//clear nextUrl string
	        sv.nextPage = '';
	      //set nextUrl string query equal to last entry
	        sv.nextPage = sv.listAll.slice(-1);
	        console.log("sv.nextPage", sv.nextPage[0]);
	        sv.getNext(sv.nextPage[0]);
				}
    };
    sv.getAll = function(url) {
        url = sv.url;
        var req = ({
            method: 'GET',
            url: url
        });
        $http(req)
            .then(sv.parse)
            .catch(function(err) {
                console.log(err);
            });
    };
    sv.getNext = function(url) {
        url = sv.nextPage[0];
        var req = ({
            method: 'GET',
            url: url
        });
        $http(req)
            .then(sv.parse)
            .catch(function(err) {
                console.log(err);
            });
    };
    console.log(sv.listAll);

}]);
