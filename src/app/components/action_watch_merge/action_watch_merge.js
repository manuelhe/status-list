(function () {
  'use strict';

  angular.module('statuslist')
    .directive('actionWatchMerge', function () {

      return {
        restrict: 'A',
        replace: false,
        templateUrl: 'app/components/action_watch_merge/action_watch_merge.html'
      };

    });

}());

