(function() {
	angular.module("Sample1")
		.service("sample1Service", sample1Service);

		sample1Service.$inject = ["$state", "$ionicPopup"];
		function sample1Service($state, $ionicPopup) {
			var service = this;

			/* ======================================== Var ======================================== */

			/* ======================================== Services ======================================== */

			/* ======================================== Public Functions ======================================== */

			/* ======================================== Private Functions ======================================== */
		}

})();