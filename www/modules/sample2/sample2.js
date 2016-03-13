(function () {
	angular.module("Sample2", [])
		.config(function ($stateProvider) {
			$stateProvider.state('sample2', {
                url: '/sample2',
                templateUrl: './modules/sample2/sample2.html',
                controller: 'sample2Controller as vm'
            });
		})
})();