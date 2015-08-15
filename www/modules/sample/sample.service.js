(function() {
	angular.module("Sample")
		.service("sampleService", sampleService);

		sampleService.$inject = ["$state", "$ionicPopup"];
		function sampleService($state, $ionicPopup) {
			var service = this;

			/* ======================================== Var ======================================== */

			/* ======================================== Services ======================================== */

			/* ======================================== Public Functions ======================================== */

			/* ======================================== Private Functions ======================================== */
		}

})();