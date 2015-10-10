(function () {
  'use strict';

  angular.module('statuslist')
    .directive('actionDeploy', function () {

      return {
        restrict: 'A',
        replace: false,
        templateUrl: 'app/components/action_deploy/action_deploy.html'
      };

    });

}());

