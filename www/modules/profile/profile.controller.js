(function() {
    angular.module("Profile")
        .controller("profileController", profileController);

    profileController.$inject = ["$ionicPopup", "loginService", "$state", "common", "profileService", "$scope"];

    function profileController($ionicPopup, loginService, $state, common, profileService, $scope) {
        var vm = this;
        vm.goTo = goTo;
        vm.refreshPostList = refreshPostList;

        /* ======================================== Var ======================================== */
        vm.service = profileService;
        vm.loggedInUser = loginService.loginUser;
        vm.posts = [];

        /* ======================================== Services ======================================== */
        myAlert = common.alert;
        var firebase = common.getFirebase;

        /* ======================================== Public Methods ======================================== */
        function goTo(where) {
            if (where == "timeline") {
                $state.go("");
            } else if (where == "popularPost") {
                $state.go("");
            } else if (where == "addStory") {
                $state.go("addstory");
            } else if (where == "notifications") {
                $state.go("");
            } else if (where == "profile") {
                $state.go("");
            }
        }

        /* ======================================== Private Methods ======================================== */
        function refreshPostList() {
            firebase("posts").then(function(rs) {
                rs.once('value', function(snapshot) {
                    var tempArr = [];
                    snapshot.forEach(function(childSnapshot) {
                        var defaultImg = "http://www.preone0.com/emc/wp-content/uploads/2012/12/Grey-Background-BLANK-1024x640.png";
                        if(childSnapshot.val().image.length > 0) {
                            defaultImg = childSnapshot.val().image;
                        }
                        var tempObj = {
                            author: childSnapshot.val().author,
                            commentId: childSnapshot.val().commentId,
                            content: childSnapshot.val().content,
                            dateTime: childSnapshot.val().dateTime,
                            image: defaultImg,
                            likes: childSnapshot.val().likes,
                            title: childSnapshot.val().title
                        };

                        console.log(tempObj);
                        console.log(tempObj.image);
                        



                        tempArr.push(tempObj);
                    });

                    angular.copy(tempArr, vm.posts);
                    console.log(vm.posts);
                    common.hideLoading();
                }, function(err) {
                    common.hideLoading();
                    myAlert(err);
                });
            });
        }

        function init() {
            if (vm.loggedInUser.profilePic == undefined || vm.loggedInUser.profilePic == null) {
                vm.loggedInUser["profilePic"] = "./img/profileimageinside.png";
            }

            console.log(vm.loggedInUser);

            // vm.loggedInUser["location"] = "singapore";
            vm.loggedInUser["followers"] = 13;
            vm.loggedInUser["following"] = 10;

            if (vm.loggedInUser.stories == undefined || vm.loggedInUser.stories == null) {
                vm.loggedInUser["stories"] = 0;
            }

            common.showLoading("Loading from database . . .");
            refreshPostList();

            vm.service.on_postModified($scope, function() {
                refreshPostList();
            });
        }

        init();
    }
})();
