(function() {
    angular.module("Login")
        .service("loginService", loginService);

    loginService.$inject = ["$state", "$ionicPopup", "common"];

    function loginService($state, $ionicPopup, common) {
        var service = this;
        service.fbLogin = fbLogin;
        service.firebaseSimpleLogin = firebaseSimpleLogin;
        service.firebaseLogout = firebaseLogout;

        /* ======================================== Var ======================================== */
        service.loginUser = {};
        var firebase = common.getFirebase;
        
        /* ======================================== Services ======================================== */

        /* ======================================== Public Functions ======================================== */
        function firebaseLogout() {
            firebase().then(function (rs) {
                rs.unauth();
            });
        }

        function fbLogin() {
            var deferred = common.$q.defer();
            
            firebase().then(function (rs) {
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

            firebase().then(function (rs) {
                rs.authWithPassword({
                    email: userInfo.emailAdd,
                    password: userInfo.password
                }, function(err, authData) {
                    if (err) {
                        deferred.reject(err);
                    } else {
                        var path = "users/"+authData.uid;
                        firebase(path).then(function (rs) {
                            rs.once('value', function(dataSnapshot) {
                                deferred.resolve(dataSnapshot.val());
                            });
                        });
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
