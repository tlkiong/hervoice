(function () {
	angular.module("Sample1", [])
		.config(function ($stateProvider) {
			$stateProvider.state('sample1', {
                url: '/sample1',
                templateUrl: './modules/sample1/sample1.html',
                controller: 'sample1Controller as vm'
            });
		})
})();