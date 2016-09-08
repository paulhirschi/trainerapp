(function() {
  'use strict';

  angular.module('trainerApp').controller('MyStatsCtrl', ['$rootScope', '$scope',
    function($rootScope, $scope) {
      var vm = this;

      $rootScope.pageTitle = 'My Stats';

      vm.message = 'My Stats controller checking in';
    }
  ]);
})();
