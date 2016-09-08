(function() {
  'use strict';

  angular.module('trainerApp')
  .controller('DashboardViewCtrl', ['$rootScope', '$http', '$state', 'Socket',
    function($rootScope, $http, $state, Socket) {
      var vm = this;

      // $rootScope.pageTitle = 'Dashboard';

      vm.message = 'Dashboard controller checking in';
      vm.tweets = [];

      // $http.get('/api/dashboard')
      //   .then(function success(res) {
      //     var data = res.data;
      //     console.log(data);
      //   }, function error(err) {
      //     console.log(err);
      //   });

      // Socket.on('tweet', function(tweet) {
      //   vm.tweets.push(tweet.text);
      // });
      vm.user = 'paulhirschi';
      vm.state = $state;
      vm.navigation = [
        {state: 'dashboardView.myplan', label: 'My Plan'},
        {state: 'dashboardView.mystats', label: 'My Stats'},
        {state: 'dashboardView.notifications', label: 'Notifications'},
        {state: 'dashboardView.settings', label: 'Settings'}
      ];

    }
  ]);
})();
