(function () {
	angular.module("Login", [])
		.config(function ($stateProvider) {
			$stateProvider.state('login', {
                url: '/login',
                templateUrl: './modules/login/login.html',
                controller: 'loginController as vm'
            });
		})
})();