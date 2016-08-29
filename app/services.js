'use strict';

app.service('downloadService', ['$http', '$httpProvider', function($http, $httpProvider) {
    console.log('entering download service');
    var sv = this;
    sv.listAll = [];


    sv.downloadAll = function() {
        function appendTransform(defaults, transform) {
            // We can't guarantee that the default transformation is an array
            defaults = angular.isArray(defaults) ? defaults : [defaults];
            // Append the new transformation to the defaults
            return defaults.concat(transform);
        }
        var req = ({
            method: 'GET',
            url: 'https://philhendrie.s3.amazonaws.com',
            transformResponse: appendTransform($http.defaults.transformResponse, function(value) {
                return appendTransform(value);
            })
        });
        $http(req)
            .then(function(result) {
                console.log(result.data);
                // sv.listAll.length = 0;
                // for (var i = 0; i < data.config.contents.length; i++){
                // 	sv.listAll.push(data.contents.key[i]);
                // }
            })
            .catch(function(err) {
                console.log(err);
            });
    };
}]);
