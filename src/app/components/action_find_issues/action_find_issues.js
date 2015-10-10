(function () {
  'use strict';

  angular.module('statuslist')
    .directive('actionFindIssues', function () {

      return {
        restrict: 'A',
        replace: false,
        templateUrl: 'app/components/action_find_issues/action_find_issues.html'
      };

    });

}());

