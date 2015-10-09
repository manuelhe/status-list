(function () {
  'use strict';

  angular
    .module('statuslist')
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/main/main.html',
          controller: 'MainController',
          controllerAs: 'main'
        });

      $urlRouterProvider.otherwise('/');
    });

}());
