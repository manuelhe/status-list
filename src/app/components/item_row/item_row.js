(function () {
  'use strict';

  angular.module('statuslist')
    .directive('itemRow', function () {

      return {
        restrict: 'A',
        replace: false,
        templateUrl: 'app/components/item_row/item_row.html',
        scope: {
          item: '=',
          isSelected: '&'
        },
        controller: function ($scope, statusCodes) {
          $scope.item.start_time = moment($scope.item.start_time);
          $scope.status = statusCodes[$scope.item.status] || statusCodes[1];
        }
      };

    });

}());

