'use strict';

var app = angular.module('phs_downloader');

function boot() {
    angular.bootstrap(document, ['app'], {
        strictDi: true
    });
}

document.addEventListener('DOMContentLoaded', boot);

module.exports = app;
