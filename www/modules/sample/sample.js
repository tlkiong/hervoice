(function () {
	angular.module("Sample", [])
		.config(function ($stateProvider) {
			$stateProvider.state('sample', {
                url: '/sample',
                templateUrl: './modules/sample/sample.html',
                controller: 'sampleController as vm'
            });
		})
})();