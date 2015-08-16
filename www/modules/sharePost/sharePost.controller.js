(function() {
    angular.module("SharePost")
        .controller("sharePostController", addstoryController);

    addstoryController.$inject = ["$ionicPopup", "loginService", "$state", "common", "$ionicHistory", "$cordovaCapture", "$http", "addstoryService"];

    function addstoryController($ionicPopup, loginService, $state, common, $ionicHistory, $cordovaCapture, $http, addstoryService) {
        var vm = this;
        vm.goBack = goBack;
        vm.activate = activate;

        /* ======================================== Var ======================================== */
        vm.post = {};
        vm.socialMedia = {
        	fb: false,
        	twitter: false,
        	google: false,
        	tumblr: false
        }

        /* ======================================== Services ======================================== */

        /* ======================================== Public Methods ======================================== */
        function activate(sm) {
        	var tempObj = {};
        	angular.copy(vm.socialMedia, tempObj);
        	tempObj[sm] = !tempObj[sm];
        	angular.copy(tempObj, vm.socialMedia);
        }

        function goBack() {
            $ionicHistory.goBack();
        }

        /* ======================================== Private Methods ======================================== */
        function init() {
            angular.copy(addstoryService.sharedPost, vm.post);
        }

        init();
    }
})();
