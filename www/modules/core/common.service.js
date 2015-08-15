(function(){
	'use strict';

	angular.module('Core')
		.service('common', common);

		common.$inject = ["$q", "$ionicLoading"];
		function common($q, $ionicLoading) {
			this.$q = $q;
			this.showLoading = showLoading;
			this.hideLoading = hideLoading;

			/* ======================================== Var ======================================== */
			this.firebase = new Firebase("https://hervoice.firebaseio.com");

	        /* ======================================== Services ======================================== */

	        /* ======================================== Public Functions ======================================== */
	        function hideLoading() {
	            $ionicLoading.hide();
	        }

	        function showLoading(msg) {
	            $ionicLoading.show({
	              template: msg
	            });
	        }

	        /* ======================================== Private Functions ======================================== */
		}
})();