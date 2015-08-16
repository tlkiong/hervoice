(function () {
	angular.module("AddStory", [])
		.config(function ($stateProvider) {
			$stateProvider.state('addstory', {
                url: '/addstory',
                templateUrl: './modules/addstory/addstory.html',
                controller: 'addstoryController as vm'
            });
		})
})();