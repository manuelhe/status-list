(function () {
  'use strict';

  angular.module('statuslist')
    .directive('widgetResult', function () {

      return {
        restrict: 'A',
        replace: false,
        templateUrl: 'app/components/widget_result/widget_result.html',
        scope: {
          data: '=widget'
        },
        controller: function ($scope, resultStyles) {

          $scope.styles = resultStyles;
          $scope.data.action = 'action-' + $scope.data.action;

        }
      };

    });

}());

