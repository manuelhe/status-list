(function () {
  'use strict';

  angular
    .module('statuslist')
    .factory('loadDataListCommand', function ($log, $http) {

      var apiHost = 'data/data-list.json';

      return {
        get: function (callback) {
          $http.get(apiHost)
            .then(function (response) {
              callback(response.data.items);
            })
            .catch(function (error) {
              $log.error('XHR Failed for data-list.\n' + angular.toJson(error.data, true));
            });
        }
      };

    });
}());
