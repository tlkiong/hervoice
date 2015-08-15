(function() {
    angular.module("Sample")
        .controller("sampleController", sampleController);

    sampleController.$inject = ["$ionicPopup", "$cordovaCamera", "common"];

    function sampleController($ionicPopup, $cordovaCamera, common) {
        var vm = this;
        vm.getImage = getImage;

        /* ======================================== Var ======================================== */


        /* ======================================== Services ======================================== */
        myAlert = common.alert;
        vm.popUp = $ionicPopup;

        /* ======================================== Public Methods ======================================== */
        function getImage() {
            var options = {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.CAMERA,
                allowEdit: false,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 100,
                targetHeight: 100,
                popoverOptions: CameraPopoverOptions,
                saveToPhotoAlbum: false
            };

            $cordovaCamera.getPicture(options).then(function(imageData) {
                var image = document.getElementById('myImage');
                image.src = "data:image/jpeg;base64," + imageData;
            }, function(err) {
                myAlert(err);
            });
        }

        /* ======================================== Private Methods ======================================== */


        function init() {

        }

        init();
    }
})();
