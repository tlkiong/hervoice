(function() {
    angular.module("Login")
        .controller("loginController", loginController);

    loginController.$inject = ["$ionicPopup", "loginService", "$state"];

    function loginController($ionicPopup, loginService, $state) {
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
            vm.service.firebaseSimpleLogin();
        }

        function fbLogin() {
            vm.service.fbLogin().then(function (rs) {
                angular.copy(rs, vm.authData);
            }, function (err) {
                var html = "<br><div style='font-size: 2em; text-align:center; font-weight:bold'>"+err+"</div>";
                popUp.alert({
                    title: "Error",
                    template: html
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
