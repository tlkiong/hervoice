(function() {
    angular.module("AddStory")
        .controller("addstoryController", addstoryController);

    addstoryController.$inject = ["$ionicPopup", "loginService", "$state", "common", "$ionicHistory", "$cordovaCapture", "$http", "addstoryService"];

    function addstoryController($ionicPopup, loginService, $state, common, $ionicHistory, $cordovaCapture, $http, addstoryService) {
        var vm = this;
        vm.goBack = goBack;
        vm.activate = activate;
        vm.recordAudio = recordAudio;
        vm.getImg = getImg;
        vm.goTo = goTo;

        /* ======================================== Var ======================================== */
        vm.post = {};

        var idolOnDemand = {
            apikey: "389c946c-da84-45a0-9c7c-bc5512c2f70f"
        }
        vm.active = {
            text: false,
            voice: false
        }

        /* ======================================== Services ======================================== */
        vm.service = addstoryService;
        myAlert = common.alert;

        /* ======================================== Public Methods ======================================== */
        function goTo(state) {
            angular.copy(vm.post, addstoryService.sharedPost);
            $state.go(state);
        }

        function getImg() {
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
                vm.post["image"] = "data:image/png;base64," + imageData;
                vm.active.text = false;
                vm.active.voice = false;
            }, function(err) {
                myAlert(err);
            });
        }

        function recordAudio() {
            var options = {
                limit: 1
            };
            $cordovaCapture.captureAudio(options).then(function(audioData) {
                    console.log(audioData);
                    postData(audioData[0].localURL);
                },
                function(err) {
                    myAlert(err);
                });

        }

        function activate(type) {
            if (type == "text") {
                vm.active.text = true;
                vm.active.voice = false;
            } else if (type == "voice") {
                vm.active.text = false;
                vm.active.voice = true;
            }
        }

        function goBack() {
            $ionicHistory.goBack();
        }

        /* ======================================== Private Methods ======================================== */
        var win = function(r) {
            console.log(r);
            console.log("Code = " + r.responseCode);
            console.log("Response = " + r.response);
            console.log("Sent = " + r.bytesSent);
            var jobId = JSON.parse(r.response).jobID;
            console.log(r.response);
            console.log(jobId);
            common.hideLoading();
            getData(jobId);
        }

        var fail = function(error) {
            common.hideLoading();
            alert("An error has occurred: Code = " + error.code);
            console.log("upload error source " + error.source);
            console.log("upload error target " + error.target);
        }

        function postData(fileURL) {
            common.showLoading("Processing data . . .");
            var options = new FileUploadOptions();
            options.fileKey = "file";
            options.fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
            options.mimeType = "text/plain";

            var params = {};
            params.apikey = idolOnDemand.apikey;

            options.params = params;

            var path = "https://api.idolondemand.com/1/api/async/recognizespeech/v1";

            var ft = new FileTransfer();
            ft.upload(fileURL, encodeURI(path), win, fail, options);
        }

        function getData(jobId) {
            common.showLoading("Finalizing data . . .");
            var newPath = "https://api.idolondemand.com/1/job/result/" + jobId+"?apikey="+idolOnDemand.apikey;
            $http.get(newPath).
            then(function(response) {
                vm.post.content = response.data.actions[0].result.document[0].content;
                activate("text");
                common.hideLoading();
            }, function(err) {
                common.hideLoading();
                myAlert(err);
                console.log(err);
            });
        }

        function init() {

        }

        init();
    }
})();
