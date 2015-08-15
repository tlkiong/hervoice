(function() {
    angular.module("Login")
        .controller("loginController", loginController);

    loginController.$inject = ["$ionicPopup", "loginService", "$state", "common"];

    function loginController($ionicPopup, loginService, $state, common) {
        var vm = this;
        vm.fbLogin = fbLogin;
        vm.firebaseSimpleLogin = firebaseSimpleLogin;
        vm.goToSignUpPage = goToSignUpPage;

        /* ======================================== Var ======================================== */
        vm.authData = {};

        /* ======================================== Services ======================================== */
        vm.service = loginService;
        popUp = $ionicPopup;

        /* ======================================== Public Methods ======================================== */
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
                $state.go("sample");
            }, function (err) {
                common.hideLoading();
                popUp.alert({
                    title: "Error",
                    template: err
                }).then(function (rs) {
                    // When ok
                }, function (err) {
                    // TODO: Show error dialog?
                });
            })
        }

        function fbLogin() {
            vm.service.fbLogin().then(function (rs) {
                angular.copy(rs, vm.service.loginUser);
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
        }

        /* ======================================== Private Methods ======================================== */

        function init() {
            
        }

        init();
    }
})();
