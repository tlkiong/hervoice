(function() {
    angular.module("Login")
        .service("loginService", loginService);

    loginService.$inject = ["$state", "$ionicPopup", "common"];

    function loginService($state, $ionicPopup, common) {
        var service = this;
        service.fbLogin = fbLogin;
        service.firebaseSimpleLogin = firebaseSimpleLogin;

        /* ======================================== Var ======================================== */
        service.loginUser = {};
        var firebase = common.firebase;
        
        /* ======================================== Services ======================================== */

        /* ======================================== Public Functions ======================================== */
        function fbLogin() {
            var deferred = common.$q.defer();
            
            firebase.authWithOAuthPopup("facebook", function(error, authData) {
                if (error) {
                    deferred.reject(error);
                } else {
                    deferred.resolve(authData);
                }
            });

            return deferred.promise;
        }

        function firebaseSimpleLogin(userInfo) {
            var deferred = common.$q.defer();

            firebase.authWithPassword({
                email: userInfo.emailAdd,
                password: userInfo.password
            }, function(err, authData) {
                if (err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve(authData);
                }
            }, {
                remember: "sessionOnly"
            });

            return deferred.promise;
        }

        /* ======================================== Private Functions ======================================== */
    }

})();
