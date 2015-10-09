/* global moment:true */
(function () {
  'use strict';

  angular
    .module('statuslist')
    .constant('moment', moment)

    .constant('statusCodes', {
      1: {label: 'Pending', style: 'item-pending'},
      2: {label: 'Running', style: 'item-running'},
      3: {label: 'Accepted', style: 'firewall-accepted'},
      4: {label: 'Rejected', style: 'firewall-rejected'},
      5: {label: 'Succeed', style: 'build-succeed'},
      6: {label: 'Fail', style: 'build-fail'},
      7: {label: 'Pending', style: 'widget-pending'},
      8: {label: 'Running', style: 'widget-running'},
      9: {label: 'Completed', style: 'widget-completed'},
      10: {label: 'Failed', style: 'widget-fail'}
    })

    .constant('resultStyles', {
      1: 'result-fail',
      2: 'result-auto',
      3: 'result-succeed'
    })

    .constant('itemTypes', {
      'firewall': {label: 'Firewall', icon: 'fa-fire'},
      'build': {label: 'Build', icon: 'fa-desktop'}
    })

    .constant('testCompletionLevels', [
      {
        from: 0,
        to: 40,
        style: 'borderline'
      },
      {
        from: 41,
        to: 70,
        style: 'averange'
      },
      {
        from: 71,
        to: 100,
        style: 'superior'
      }
    ]);

}());
