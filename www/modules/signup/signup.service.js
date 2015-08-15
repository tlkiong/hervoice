(function() {
    angular.module("Signup")
        .service("signupService", signupService);

    signupService.$inject = ["$state", "$ionicPopup", "common"];

    function signupService($state, $ionicPopup, common) {
        var service = this;
        service.firebaseSignup = firebaseSignup;

        /* ======================================== Var ======================================== */
        var firebase = common.firebase;

        /* ======================================== Services ======================================== */

        /* ======================================== Public Functions ======================================== */

        function firebaseSignup(userInfo) {
            var deferred = common.$q.defer();

            firebase.createUser({
                email: userInfo.emailAdd,
                password: userInfo.password
            }, function(err, userData) {
                if (err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve(userData);
                }
            });

            return deferred.promise;
        }

        /* ======================================== Private Functions ======================================== */
    }

})();
