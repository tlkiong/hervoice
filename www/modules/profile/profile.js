(function () {
	angular.module("Profile", [])
		.config(function ($stateProvider) {
			$stateProvider.state('profile', {
                url: '/profile',
                templateUrl: './modules/profile/profile.html',
                controller: 'profileController as vm'
            });
		})
})();