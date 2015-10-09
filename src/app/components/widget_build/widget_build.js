(function () {
  'use strict';

  angular.module('statuslist')
    .directive('widgetBuild', function () {

      return {
        restrict: 'A',
        replace: false,
        templateUrl: 'app/components/widget_build/widget_build.html',
        scope: {
          data: '=widget'
        },
        controller: function ($scope) {
          $scope.data.time = moment($scope.data.time);
        }
      };

    });

}());

