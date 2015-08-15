(function() {
    angular.module("Signup")
        .controller("signupController", signupController);

    signupController.$inject = ["$ionicPopup", "signupService", "$state", "loginService"];

    function signupController($ionicPopup, signupService, $state, loginService) {
        var vm = this;
        vm.signup = signup;

        /* ======================================== Var ======================================== */
        vm.disableSignupBtn = true;
        vm.authData = {};
        // vm.signupForm <== can be accessed

        /* ======================================== Services ======================================== */
        vm.service = signupService;
        popUp = $ionicPopup;

        /* ======================================== Public Methods ======================================== */
        function signup() {
            var tempObj = {};
            angular.copy(vm.authData, tempObj);

            vm.service.firebaseSignup(tempObj).then(function (rs) {
                loginService.firebaseSimpleLogin(tempObj).then(function (rs) {
                    angular.copy(rs, loginService.loginUser);
                    $state.go("sample");
                }, function (err) {
                    popUp.alert({
                        title: "Error",
                        template: err
                    }).then(function (rs) {
                        // When ok
                    }, function (err) {
                        // TODO: Show error dialog?
                    });
                });
            }, function (err) {
                popUp.alert({
                    title: "Error",
                    template: err
                }).then(function (rs) {
                    // When ok
                }, function (err) {
                    // TODO: Show error dialog?
                });
            });

            clearForm();
        }

        /* ======================================== Private Methods ======================================== */
        function clearForm() {
            angular.copy({}, vm.authData);
            vm.signupForm.$setPristine();
        }

        function init() {
            angular.copy({}, vm.authData);
        }

        init();
    }
})();
