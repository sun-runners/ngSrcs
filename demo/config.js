'use strict';

angular.module('app')
  .config(function ($httpProvider, $resourceProvider, $stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {

    $resourceProvider.defaults.stripTrailingSlashes = false;

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $stateProvider
      .state('demo', { url: '/', templateUrl: 'demo/views/demo.html', controller: 'DemoCtrl', params:{data:null} })
      .state('code', { url: '/', templateUrl: 'demo/views/code.html', controller: 'CodeCtrl', params:{data:null} });

    $urlRouterProvider.otherwise('/');

    $mdThemingProvider.definePalette('white', {
      '50': 'ffffff',
      '100': 'ffffff',
      '200': 'ffffff',
      '300': 'ffffff',
      '400': 'ffffff',
      '500': 'ffffff',
      '600': 'ffffff',
      '700': 'ffffff',
      '800': 'ffffff',
      '900': 'ffffff',
      'A100': 'ffffff',
      'A200': 'ffffff',
      'A400': 'ffffff',
      'A700': 'ffffff',
      'contrastDefaultColor': 'dark'
    });
    $mdThemingProvider.theme('default').dark().primaryPalette('grey',{'default': '50'}).accentPalette('grey',{'default': '50'});

  });
