(function() {
    angular.module("SharePost")
        .controller("sharePostController", addstoryController);

    addstoryController.$inject = ["$ionicPopup", "loginService", "$state", "common", "$ionicHistory", "addstoryService", "$http", "addstoryService", "profileService", "$timeout"];

    function addstoryController($ionicPopup, loginService, $state, common, $ionicHistory, addstoryService, $http, addstoryService, profileService, $timeout) {
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
        vm.profileService = profileService;

        /* ======================================== Public Methods ======================================== */
        function sharePost() {
            console.log(vm.addstoryService.sharedPost);
            if(vm.addstoryService.sharedPost.image == undefined || vm.addstoryService.sharedPost.image == null) {
                vm.addstoryService.sharedPost.image = "";
            }

            var tempObj = {
                title: vm.addstoryService.sharedPost.title,
                content: vm.addstoryService.sharedPost.content,
                image: vm.addstoryService.sharedPost.image,
                likes: 0,
                commentId: "",
                author: loginService.loginUser.emailAdd,
                dateTime: Date.now()
            };


            firebase.then(function(rs) {
                rs.push(tempObj);
                $state.go("profile");
                $timeout(vm.profileService.event_profileModified(0), 500);
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
