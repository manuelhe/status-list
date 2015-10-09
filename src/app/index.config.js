(function () {
  'use strict';

  angular
    .module('statuslist')
    .config(function ($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  });

}());
