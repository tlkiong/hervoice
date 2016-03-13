(function() {
    angular.module("Sample1")
        .controller("sample1Controller", sample1Controller);

    sample1Controller.$inject = ["$ionicPopup", "$cordovaCamera", "common", "$state"];

    function sample1Controller($ionicPopup, $cordovaCamera, common, $state) {
        var vm = this;
        vm.goTo = goTo;

        /* ======================================== Var ======================================== */


        /* ======================================== Services ======================================== */

        /* ======================================== Public Methods ======================================== */
        function goTo(lala) {
            $state.go(lala);
        }

        /* ======================================== Private Methods ======================================== */


        function init() {

        }

        init();
    }
})();
