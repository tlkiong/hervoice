(function(){
	'use strict';

	angular.module('Core')
		.service('common', common);

		common.$inject = ["$q", "$ionicLoading", "$ionicPopup"];
		function common($q, $ionicLoading, $ionicPopup) {
			var service = this;
			service.$q = $q;
			service.showLoading = showLoading;
			service.hideLoading = hideLoading;
			service.alert = alert;

			/* ======================================== Var ======================================== */
			service.firebase = new Firebase("https://hervoice.firebaseio.com");

	        /* ======================================== Services ======================================== */

	        /* ======================================== Public Functions ======================================== */
	        function alert(msg) {
	        	$ionicPopup.alert({
                    title: "Error",
                    template: msg
                }).then(function (rs) {
                    // When ok
                }, function (err) {
                    // TODO: Show error dialog?
                });
	        }

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