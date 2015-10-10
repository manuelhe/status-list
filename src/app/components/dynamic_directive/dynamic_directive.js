(function () {
  'use strict';

  angular.module('statuslist')
    .directive('dynamicDirective', function ($compile) {
      return {
        restrict: 'A',
        replace: false,
        terminal: true,
        priority: 1000,
        link: function (scope, element, attrs) {
          element.attr(scope.$eval(attrs.dynamicDirective), "");//add dynamic directive
          element.removeAttr("dynamic-directive"); //remove the attribute to avoid indefinite loop
          element.removeAttr("data-dynamic-directive");
          $compile(element)(scope);
        }
      };
    });

}());
