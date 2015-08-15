(function() {
    angular.module("Sample")
        .controller("sampleController", sampleController);

    sampleController.$inject = ["$ionicPopup"];

    function sampleController($ionicPopup) {
        var vm = this;
        

        /* ======================================== Var ======================================== */
        

        /* ======================================== Services ======================================== */
        
        vm.popUp = $ionicPopup;

        /* ======================================== Public Methods ======================================== */
        

        /* ======================================== Private Methods ======================================== */
        

        function init() {
            
        }

        init();
    }
})();
