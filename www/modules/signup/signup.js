(function () {
	angular.module("Signup", [])
		.config(function ($stateProvider) {
			$stateProvider.state('signup', {
                url: '/signup',
                templateUrl: './modules/signup/signup.html',
                controller: 'signupController as vm'
            });
		})
})();