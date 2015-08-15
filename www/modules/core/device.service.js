(function() {
    'use strict';

    angular.module('Core')
        .service('deviceService', deviceService);

    deviceService.$inject = ["$cordovaCamera", "common"];

    function deviceService($cordovaCamera, common) {
        var service = this;
        service.camera = {
			lala: _lala
		};

        /* ======================================== Var ======================================== */

        /* ======================================== Services ======================================== */

        /* ======================================== Public Functions ======================================== */
        function _lala() {
        	console.log("Really wtf?");
        }

        function _getImg() {
            console.log("here");
            var deferred = common.$q.defer();
            

            return deferred.promise;
        }

        /* ======================================== Private Functions ======================================== */
        function init() {
            console.log("init service");
            console.log(this);
        }

        init();
    }
})();
