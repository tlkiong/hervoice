(function() {
    angular.module("Signup")
        .service("signupService", signupService);

    signupService.$inject = ["$state", "$ionicPopup", "common"];

    function signupService($state, $ionicPopup, common) {
        var service = this;
        service.firebaseSignup = firebaseSignup;

        /* ======================================== Var ======================================== */
        var firebase = common.getFirebase;

        /* ======================================== Services ======================================== */

        /* ======================================== Public Functions ======================================== */

        function firebaseSignup(userInfo) {
            var deferred = common.$q.defer();
            
            firebase().then(function(rs) {
                rs.createUser({
                    email: userInfo.emailAdd,
                    password: userInfo.password
                }, function(err, userData) {
                    if (err) {
                        deferred.reject(err);
                    } else {
                        var tempObj = {};
                        tempObj[userData.uid] = {
                            displayName: userInfo.displayName,
                            emailAdd: userInfo.emailAdd,
                            loaction: userInfo.location,
                            profilePic: userInfo.profilePic
                        }

                        firebase("users").then(function (rs1) {

                            rs1.set(tempObj);

                            deferred.resolve(userData);
                        })
                    }
                });
            })

            return deferred.promise;
        }

        /* ======================================== Private Functions ======================================== */
    }

})();
