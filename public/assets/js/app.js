angular.module('myAngularBlog',['ngRoute'])

.config(['$routeProvider',function ($routeProvider){

	$routeProvider
	.when('/',{

		templateUrl : 'template/index.html',
		controller  : 'HomeCtrl'

	})

	.when('/index',{

		templateUrl : 'template/index.html',
		controller  : 'HomeCtrl'

	})

	.when('/about',{

		templateUrl : 'template/about.html',
		controller  : 'AboutCtrl'

	})

	.when('/post/:postId',{

		templateUrl : 'template/post.html',
		controller  : 'PostCtrl'

	})

	.when('/contact',{

		templateUrl : 'template/contact.html',
		controller  : 'ContactCtrl'

	})

	.otherwise ({ redirectTo: '/' });

}]);
