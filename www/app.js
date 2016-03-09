angular.module('spectrumSports', [
  'ionic',
  'template',
  'events'
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

  .state('app.events', {
    url: '/events',
    views: {
      'templateContent': {
        templateUrl: 'modules/events/events.html',
        controller: 'eventsCtrl'
      }
    }
  });

  // .state('app.event', {
  //   url: '/events/:eventId',
  //   views: {
  //     'menuContent': {
  //       templateUrl: '/modules/event/event.html',
  //       controller: 'eventCtrl'
  //     }
  //   }
  // });

  // Fallback route
  $urlRouterProvider.otherwise('/app/events');
});
