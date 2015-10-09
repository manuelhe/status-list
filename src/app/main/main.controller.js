(function () {
  'use strict';

  angular
    .module('statuslist')
    .controller('MainController', function MainController($scope, $timeout, loadDataListCommand) {

      loadDataListCommand.get(function (data) {
        $scope.dataList = data;
      });

      $scope.selectedItem = false;

      $scope.isSelected = function (id) {
        return id === $scope.selectedItem;
      };

    });

}());
