(function() {
    angular.module("Login")
        .controller("loginController", loginController);

    loginController.$inject = ["$ionicPopup", "loginService", "$state", "common", "deviceService"];

    function loginController($ionicPopup, loginService, $state, common, deviceService) {
        var vm = this;
        // vm.fbLogin = fbLogin;
        vm.firebaseSimpleLogin = firebaseSimpleLogin;
        vm.goToSignUpPage = goToSignUpPage;

        vm.mockLogin = mockLogin;
        

        /* ======================================== Var ======================================== */
        vm.authData = {};

        /* ======================================== Services ======================================== */
        vm.service = loginService;
        device = deviceService;
        myAlert = common.alert;

        /* ======================================== Public Methods ======================================== */
        function mockLogin() {
            vm.authData["emailAdd"] = "testing@testing.com";
            vm.authData["password"] = "123";

            firebaseSimpleLogin();
        }

        function goToSignUpPage() {
            $state.go("signup");
        }

        function firebaseSimpleLogin() {
            common.showLoading("Logging in . . .");

            var tempObj = {};
            angular.copy(vm.authData, tempObj);

            vm.service.firebaseSimpleLogin(tempObj).then(function (rs) {
                common.hideLoading();
                angular.copy(rs, vm.service.loginUser);
                $state.go("profile");
            }, function (err) {
                common.hideLoading();
                myAlert(err);
            })
        }

        function fbLogin() {
            vm.service.fbLogin().then(function (rs) {
                angular.copy(rs, vm.service.loginUser);
                $state.go("sample");
            }, function (err) {
                myAlert(err);
            });
        }

        /* ======================================== Private Methods ======================================== */

        function init() {
            common.getFirebase().then(function (rs) {
                rs.unauth();
            })
        }

        init();
    }
})();
