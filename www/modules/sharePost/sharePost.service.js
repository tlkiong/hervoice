(function() {
    angular.module("SharePost")
        .service("sharePostService", sharePostService);

    sharePostService.$inject = ["$state", "$ionicPopup", "common"];

    function sharePostService($state, $ionicPopup, common) {
        var service = this;
        service.sharedPost = {};

        /* ======================================== Var ======================================== */
        
        /* ======================================== Services ======================================== */

        /* ======================================== Public Functions ======================================== */

        /* ======================================== Private Functions ======================================== */
    }

})();
