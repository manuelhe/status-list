(function () {
  'use strict';

  angular.module('statuslist')
    .directive('widgetsStatus', function () {

      return {
        restrict: 'A',
        replace: false,
        templateUrl: 'app/components/widgets_status/widgets_status.html',
        scope: {
          item: '='
        },
        controller: function ($scope, statusCodes) {
          $scope.widgets = [
            {
              name: 'Metrics',
              status: statusCodes[$scope.item.metrics.status] || statusCodes[7]
            },
            {
              name: 'Build',
              status: statusCodes[$scope.item.build.status] || statusCodes[7]
            },
            {
              name: 'Unit Test',
              status: statusCodes[$scope.item.unit_test.status] || statusCodes[7]
            },
            {
              name: 'Functional Test',
              status: statusCodes[$scope.item.functional_test.status] || statusCodes[7]
            }
          ];
        }
      };

    });

}());

