(function() {
    angular.module("Login")
        .controller("loginController", loginController);

    loginController.$inject = ["$ionicPopup", "loginService"];

    function loginController($ionicPopup, loginService) {
        var vm = this;
        vm.fbLogin = fbLogin;
        vm.simpleLogin = simpleLogin;

        /* ======================================== Var ======================================== */
        vm.authData = {};

        /* ======================================== Services ======================================== */
        vm.service = loginService;
        popUp = $ionicPopup;

        /* ======================================== Public Methods ======================================== */
        function simpleLogin() {

            vm.service.simpleLogin();
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
