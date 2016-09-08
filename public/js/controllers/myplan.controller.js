(function() {
  'use strict';

  angular.module('trainerApp').controller('MyPlanCtrl', ['$rootScope', '$scope',
    function($rootScope, $scope) {
      var vm = this;

      $rootScope.pageTitle = 'My Plan';

      vm.message = 'My Plan controller checking in';
    }
  ]);
})();
