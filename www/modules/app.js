(function(){
  'use strict';
  
  angular.module('app', [
    "Core",
    "Login",
    "Signup",
    "Sample",
    "Profile",
    "AddStory",
    "SharePost",
    "Sample1",
    "Sample2"
    ])

  .config(function($urlRouterProvider, $compileProvider){
      $urlRouterProvider.otherwise('/login');
      $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|file|blob|cdvfile|content):|data:image\//);
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