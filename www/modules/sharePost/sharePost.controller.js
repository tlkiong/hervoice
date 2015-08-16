(function() {
    angular.module("SharePost")
        .controller("sharePostController", addstoryController);

    addstoryController.$inject = ["$ionicPopup", "loginService", "$state", "common", "$ionicHistory", "addstoryService", "$http", "addstoryService"];

    function addstoryController($ionicPopup, loginService, $state, common, $ionicHistory, addstoryService, $http, addstoryService) {
        var vm = this;
        vm.goBack = goBack;
        vm.activate = activate;
        vm.sharePost = sharePost;

        /* ======================================== Var ======================================== */
        vm.post = {};
        vm.socialMedia = {
        	fb: false,
        	twitter: false,
        	google: false,
        	tumblr: false
        }
        var firebase = common.getFirebase("posts");

        /* ======================================== Services ======================================== */
        vm.addstoryService = addstoryService;

        /* ======================================== Public Methods ======================================== */
        function sharePost() {
            console.log(vm.addstoryService);
            var tempObj = {

            };


            firebase.then(function(rs) {
                rs.push();   
            })
        }

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
