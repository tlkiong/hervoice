(function() {
    angular.module("Signup")
        .controller("signupController", signupController);

    signupController.$inject = ["$ionicPopup", "signupService", "$state", "loginService", "common", "$cordovaCamera"];

    function signupController($ionicPopup, signupService, $state, loginService, common, $cordovaCamera) {
        var vm = this;
        vm.signup = signup;
        vm.activate = activate;
        vm.getImage = getImage;

        /* ======================================== Var ======================================== */
        vm.disableSignupBtn = true;
        vm.authData = {};
        vm.active = {
            male: false,
            female: true
        }
        // vm.signupForm <== can be accessed

        /* ======================================== Services ======================================== */
        vm.service = signupService;
        myAlert = common.alert;

        /* ======================================== Public Methods ======================================== */
        function getImage() {
            var options = {
                quality: 100,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                allowEdit: false,
                encodingType: Camera.EncodingType.PNG,
                targetWidth: 550,
                targetHeight: 550,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false
            };

            $cordovaCamera.getPicture(options).then(function(imageData) {
                vm.authData["profilePic"] = "data:image/png;base64," + imageData;
            }, function(err) {
                myAlert(err);
            });
        }

        function activate(type) {
            var tempObj = {
                male: false,
                female: false
            }

            if(type == "male") {
                tempObj.male = true;
            } else if (type == "female") {
                tempObj.female = true;
            }
            angular.copy(tempObj, vm.active);
        }

        function signup() {
            common.showLoading("Signing up . . .");
            var tempObj = {};
            angular.copy(vm.authData, tempObj);

            vm.service.firebaseSignup(tempObj).then(function (rs) {
                common.hideLoading();
                common.showLoading("Logging in . . .");
                loginService.firebaseSimpleLogin(tempObj).then(function (rs) {
                    angular.copy(rs, loginService.loginUser);
                    common.hideLoading();
                    $state.go("sample");
                }, function (err) {
                    common.hideLoading();
                    myAlert(err);
                });
            }, function (err) {
                common.hideLoading();
                myAlert(err);
            });

            clearForm();
        }

        /* ======================================== Private Methods ======================================== */
        function clearForm() {
            angular.copy({}, vm.authData);
            vm.signupForm.$setPristine();
        }

        function init() {
            angular.copy({}, vm.authData);
            vm.authData["profilePic"] = "./img/profileimageinside.png";
        }

        init();
    }
})();
