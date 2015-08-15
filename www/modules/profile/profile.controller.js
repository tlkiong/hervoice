(function() {
    angular.module("Profile")
        .controller("profileController", profileController);

    profileController.$inject = ["$ionicPopup", "loginService", "$state", "common", "profileService"];

    function profileController($ionicPopup, loginService, $state, common, profileService) {
        var vm = this;
        

        /* ======================================== Var ======================================== */
        vm.loggedInUser = loginService.loginUser;

        /* ======================================== Services ======================================== */
        myAlert = common.alert;

        /* ======================================== Public Methods ======================================== */

        /* ======================================== Private Methods ======================================== */

        function init() {
            if(vm.loggedInUser.profilePic == undefined || vm.loggedInUser.profilePic == null) {
                vm.loggedInUser["profilePic"] = "./img/profileimageinside.png";
                vm.loggedInUser["location"] = "singapore";
                vm.loggedInUser["followers"] = 13;
                vm.loggedInUser["following"] = 10;
            }

            if(vm.loggedInUser.stories == undefined || vm.loggedInUser.stories == null) {
                vm.loggedInUser["stories"] = 0;
            }
        }

        init();
    }
})();
