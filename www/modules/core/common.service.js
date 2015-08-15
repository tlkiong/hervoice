(function(){
	'use strict';

	angular.module('Core')
		.service('common', common);

		common.$inject = ['$q'];
		function common($q) {
			this.$q = $q;
			this.firebase = new Firebase("https://hervoice.firebaseio.com");

		/* ======================================== Var ======================================== */

        /* ======================================== Services ======================================== */

        /* ======================================== Public Functions ======================================== */

        /* ======================================== Private Functions ======================================== */
		}
})();