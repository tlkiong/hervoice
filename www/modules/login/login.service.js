(function() {
    angular.module("Login")
        .service("loginService", loginService);

    loginService.$inject = ["$state", "$ionicPopup", "common"];

    function loginService($state, $ionicPopup, common) {
        var service = this;
        service.fbLogin = fbLogin;
        service.simpleLogin = simpleLogin;

        /* ======================================== Var ======================================== */

        /* ======================================== Services ======================================== */

        /* ======================================== Public Functions ======================================== */
        function fbLogin() {
            var deferred = common.$q.defer();

            var ref = new Firebase("https://hervoice.firebaseio.com");
            ref.authWithOAuthPopup("facebook", function(error, authData) {
                if (error) {
                    deferred.reject(error);
                } else {
                    deferred.resolve(authData);
                }
            });

            return deferred.promise;
        }

        function simpleLogin() {

        }

        /* ======================================== Private Functions ======================================== */
    }

})();
