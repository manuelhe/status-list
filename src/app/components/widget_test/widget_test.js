(function () {
  'use strict';

  angular.module('statuslist')
    .directive('widgetTest', function () {

      return {
        restrict: 'A',
        replace: false,
        templateUrl: 'app/components/widget_test/widget_test.html',
        scope: {
          data: '=widget',
          title: '@'
        },
        controller: function ($scope, testCompletionLevels) {

          $scope.getLevelStyle = function (value) {
            var style;
            testCompletionLevels.forEach(function (level) {
              if (value >= level.from && value <= level.to) {
                style = level.style;
              }
            });
            return style;
          };

          $scope.percentualValue = Math.round(100 * $scope.data.passed / $scope.data.total);
          $scope.data.coverage = Math.round(100 * $scope.data.coverage);

        }
      };

    });

}());

