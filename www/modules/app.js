(function(){
  'use strict';
  
  angular.module('Core', [
    "ionic",
    "firebase",
    "Login"
    ])

  .config(function($urlRouterProvider){
      $urlRouterProvider.otherwise('/login');
  })

  .run(function($ionicPlatform, $rootScope) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
})();