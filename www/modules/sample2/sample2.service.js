(function() {
	angular.module("Sample2")
		.service("sample2Service", sample2Service);

		sample2Service.$inject = ["$state", "$ionicPopup"];
		function sample2Service($state, $ionicPopup) {
			var service = this;

			/* ======================================== Var ======================================== */

			/* ======================================== Services ======================================== */

			/* ======================================== Public Functions ======================================== */

			/* ======================================== Private Functions ======================================== */
		}

})();