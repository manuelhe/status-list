(function () {
  'use strict';

  angular
    .module('statuslist')
    .controller('MainController', function MainController($scope, $timeout, loadDataListCommand) {

      loadDataListCommand.get(function (data) {
        $scope.dataList = data;
      });

      $scope.selectedItem = {};

      $scope.$on('item:selected', function (event, data) {
        $scope.selectedItem = data;
      });

    });

}());
