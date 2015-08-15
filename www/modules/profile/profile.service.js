(function() {
    angular.module("Profile")
        .service("profileService", profileService);

    profileService.$inject = ["$state", "$ionicPopup", "common"];

    function profileService($state, $ionicPopup, common) {
        var service = this;
        service.fbLogin = fbLogin;
        service.firebaseSimpleLogin = firebaseSimpleLogin;
        service.firebaseLogout = firebaseLogout;

        /* ======================================== Var ======================================== */
        service.loginUser = {};
        var firebase = common.getFirebase();
        
        /* ======================================== Services ======================================== */

        /* ======================================== Public Functions ======================================== */
        function firebaseLogout() {
            firebase.then(function (rs) {
                rs.unauth();
            });
        }

        function fbLogin() {
            var deferred = common.$q.defer();
            
            firebase.then(function (rs) {
                rs.authWithOAuthPopup("facebook", function(error, authData) {
                    if (error) {
                        deferred.reject(error);
                    } else {
                        deferred.resolve(authData);
                    }
                });
            })

            return deferred.promise;
        }

        function firebaseSimpleLogin(userInfo) {
            var deferred = common.$q.defer();

            firebase.then(function (rs) {
                rs.authWithPassword({
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
            });

            return deferred.promise;
        }

        /* ======================================== Private Functions ======================================== */
    }

})();
