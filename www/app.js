angular.module('draft', [
  'ionic',
  'common',
  'template',
  'dashboard'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'modules/template/template.html',
    controller: 'templateCtrl'
  })

  .state('app.dashboard', {
    url: '/dashboard',
    views: {
      'templateContent': {
        templateUrl: 'modules/dashboard/dashboard.html',
        controller: 'dashboardCtrl'
      }
    }
  });

  // Fallback route
  $urlRouterProvider.otherwise('/app/dashboard');
});
