(function() {
    angular.module("AddStory")
        .service("addstoryService", addstoryService);

    addstoryService.$inject = ["$state", "$ionicPopup", "common"];

    function addstoryService($state, $ionicPopup, common) {
        var service = this;
        service.sharedPost = {};
 
        /* ======================================== Var ======================================== */
        
        /* ======================================== Services ======================================== */

        /* ======================================== Public Functions ======================================== */

        /* ======================================== Private Functions ======================================== */
    }

})();
