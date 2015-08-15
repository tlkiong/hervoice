(function() {
    angular.module("Signup")
        .controller("signupController", signupController);

    signupController.$inject = ["$ionicPopup", "signupService", "$state", "loginService", "common"];

    function signupController($ionicPopup, signupService, $state, loginService, common) {
        var vm = this;
        vm.signup = signup;

        /* ======================================== Var ======================================== */
        vm.disableSignupBtn = true;
        vm.authData = {};
        vm.active = {
            male: false,
            female: true
        }
        // vm.signupForm <== can be accessed

        /* ======================================== Services ======================================== */
        vm.service = signupService;
        myAlert = common.alert;

        /* ======================================== Public Methods ======================================== */
        function signup() {
            common.showLoading("Signing up . . .");
            var tempObj = {};
            angular.copy(vm.authData, tempObj);

            vm.service.firebaseSignup(tempObj).then(function (rs) {
                common.hideLoading();
                common.showLoading("Logging in . . .");
                loginService.firebaseSimpleLogin(tempObj).then(function (rs) {
                    angular.copy(rs, loginService.loginUser);
                    common.hideLoading();
                    $state.go("sample");
                }, function (err) {
                    common.hideLoading();
                    myAlert(err);
                });
            }, function (err) {
                common.hideLoading();
                myAlert(err);
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
