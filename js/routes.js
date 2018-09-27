angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('home', {
    url: '/page1',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('allen', {
    url: '/page2',
    templateUrl: 'templates/allen.html',
    controller: 'allenCtrl'
  })

  .state('carlo', {
    url: '/page3',
    templateUrl: 'templates/carlo.html',
    controller: 'carloCtrl'
  })

  .state('aldrin', {
    url: '/page5',
    templateUrl: 'templates/aldrin.html',
    controller: 'aldrinCtrl'
  })

  .state('lois', {
    url: '/page6',
    templateUrl: 'templates/lois.html',
    controller: 'loisCtrl'
  })

  .state('jeno', {
    url: '/page8',
    templateUrl: 'templates/jeno.html',
    controller: 'jenoCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});