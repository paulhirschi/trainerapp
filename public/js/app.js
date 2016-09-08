(function() {
  'use strict';

  angular.module('trainerApp', [
      'ui.router',
      'ngCookies',
      'ngTouch',
      'ngAria',
      'ngAnimate',
      'btford.socket-io',
      'authService'
    ])
  .factory('Socket', ['socketFactory', function(socketFactory) {
    return socketFactory();
  }])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('login', {
        url          : '/login',
        templateUrl  : 'login.html',
        controller   : 'LoginCtrl',
        controllerAs : 'login'
      })
      .state('dashboardView', {
        templateUrl  : 'dashboardView.html',
        controller   : 'DashboardViewCtrl',
        controllerAs : 'dashboardView'
      })
      .state('dashboardView.myplan', {
        url          : '/:user/myplan',
        templateUrl  : 'myplan.html',
        controller   : 'MyPlanCtrl',
        controllerAs : 'myPlan'
      })
      .state('dashboardView.mystats', {
        url          : '/:user/mystats',
        templateUrl  : 'mystats.html',
        controller   : 'MyStatsCtrl',
        controllerAs : 'myStats'
      })
      .state('dashboardView.notifications', {
        url          : '/:user/notifications',
        templateUrl  : 'notifications.html',
        controller   : 'NotificationsCtrl',
        controllerAs : 'notifications'
      })
      .state('dashboardView.settings', {
        url          : '/:user/settings',
        templateUrl  : 'settings.html',
        controller   : 'SettingsCtrl',
        controllerAs : 'settings'
      })
      .state('dashboardView.help', {
        url          : '/help',
        templateUrl  : 'help.html',
        controller   : 'HelpCtrl',
        controllerAs : 'help'
      });

    $urlRouterProvider.otherwise('/login');
    $locationProvider.html5Mode(true);
  }])
  .run(['$rootScope', '$window', '$state', 'Auth',
    function($rootScope, $window, $state, Auth) {
      $rootScope.app_name = 'trainerApp';
      $rootScope.user = $window.localStorage.getItem('user');

      $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
        $rootScope.loggedIn = Auth.isLoggedIn();
        var d = new Date();
        var now = d.getTime();
        var then = $window.localStorage.getItem('ts');
        var dateDif = Math.abs(now - then) / 36e5;
        // If logged in, redirect to myplan
        // if(toState.name === 'login' && $rootScope.loggedIn) {
        //   event.preventDefault();
        //   $state.go('dashboardView.myplan');
        // }
        //  If user not logged in, redirect to login
        // if(toState.name !== 'login' && !$rootScope.loggedIn) {
        //   event.preventDefault();
        //   $rootScope.errorMessage = "Gotta log in";
        //   $state.go('login');
        // }
        // Log user out automatically after 8 hours
        // if($rootScope.loggedIn && dateDif >= 8) {
        //   event.preventDefault();
        //   Auth.logout();
        //   $rootScope.errorMessage = 'Session has timed out. Please log in to continue';
        //   $state.go('login');
        // }
      });
    }
  ]);
})();
