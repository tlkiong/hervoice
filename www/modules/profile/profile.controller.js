(function() {
    angular.module("Profile")
        .controller("profileController", profileController);

    profileController.$inject = ["$ionicPopup", "loginService", "$state", "common", "profileService", "$scope"];

    function profileController($ionicPopup, loginService, $state, common, profileService, $scope) {
        var vm = this;
        vm.goTo = goTo;

        /* ======================================== Var ======================================== */
        vm.service = profileService;
        vm.loggedInUser = loginService.loginUser;

        /* ======================================== Services ======================================== */
        myAlert = common.alert;

        /* ======================================== Public Methods ======================================== */
        function goTo(where) {
            if(where == "timeline") {
                $state.go("");
            } else if(where == "popularPost") {
                $state.go("");
            } else if(where == "addStory") {
                $state.go("addstory");
            } else if(where == "notifications") {
                $state.go("");
            } else if(where == "profile") {
                $state.go("");
            } 
        }

        /* ======================================== Private Methods ======================================== */

        function init() {
            if(vm.loggedInUser.profilePic == undefined || vm.loggedInUser.profilePic == null) {
                vm.loggedInUser["profilePic"] = "./img/profileimageinside.png";
            }

            vm.loggedInUser["location"] = "singapore";
            vm.loggedInUser["followers"] = 13;
            vm.loggedInUser["following"] = 10;

            if(vm.loggedInUser.stories == undefined || vm.loggedInUser.stories == null) {
                vm.loggedInUser["stories"] = 0;
            }

            vm.service.on_postModified($scope, function (){
                // Get data from firebase on my own profile
            });
        }

        init();
    }
})();
