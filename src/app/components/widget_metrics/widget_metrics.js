(function () {
  'use strict';

  angular.module('statuslist')
    .directive('widgetMetrics', function () {

      return {
        restrict: 'A',
        replace: false,
        templateUrl: 'app/components/widget_metrics/widget_metrics.html',
        scope: {
          data: '=widget'
        },
        controller: function ($scope) {

          $scope.getTrendStyle = function (key) {
            var delta = $scope.data[key].current - $scope.data[key].previous;
            if (delta === 0) {
              return 'right';
            } else if (delta > 0) {
              return 'up';
            } else {
              return 'down';
            }
          };

        }
      };

    });

}());

