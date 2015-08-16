(function () {
	angular.module("SharePost", [])
		.config(function ($stateProvider) {
			$stateProvider.state('sharePost', {
                url: '/sharePost',
                templateUrl: './modules/sharePost/sharePost.html',
                controller: 'sharePostController as vm'
            });
		})
})();