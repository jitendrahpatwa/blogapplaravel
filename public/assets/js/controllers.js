angular.module('myAngularBlog')

.controller('HomeCtrl',['$scope','MyBlogs',function($scope,MyBlogs){

		console.log("Home Controller Called");

		$scope.blogs = MyBlogs.all();
		/*[
		{
			"Id":"1",
			"Title":"Devendra Ahirwar",
			"Description":"Devendra Shambhoo Prasad Ahirwar",
			"Image":"As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man.",

		},
		{
			"Id":"2",
			"Title":"Swapnil Mhaske",
			"Description":"Swapnil Kalidas Mhaske",
			"Image":"As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man.",

		},
		{
			"Id":"3",
			"Title":"Jitendra Patwa",
			"Description":"Jitendra Hiralal Patwa",
			"Image":"As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man.",

		},
		{
			"Id":"4",
			"Title":"Bhavin Koriya",
			"Description":"Bhavin Dinesh Koriya",
			"Image":"As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man.",

		},
		{
			"Id":"5",
			"Title":"Amit Gupta",
			"Description":"Amit Premchand Gupta",
			"Image":"As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man.",

		}
		];
		*/
		console.log($scope.blogs);

}])

.controller('AboutCtrl',['$scope',function($scope){

		console.log("About Controller Called");

}])

.controller('PostCtrl',['$scope','$routeParams','MyBlogs',function($scope,$routeParams,MyBlogs){
		window.scrollTo(500, 0);
		console.log("Post Controller Called");
		console.log($routeParams.postId);

		console.log(MyBlogs.get($routeParams.postId));
		$scope.blog = MyBlogs.get($routeParams.postId);

		console.log($scope.blog);

		/*$scope.blogs = 
		[{
			"Id":"1",
			"Title":"Devendra Ahirwar",
			"Description":"Devendra Shambhoo Prasad Ahirwar",
			"Image":"As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man.",

		},
		{
			"Id":"2",
			"Title":"Swapnil Mhaske",
			"Description":"Swapnil Kalidas Mhaske",
			"Image":"As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man.",

		},
		{
			"Id":"3",
			"Title":"Jitendra Patwa",
			"Description":"Jitendra Hiralal Patwa",
			"Image":"As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man.",

		},
		{
			"Id":"4",
			"Title":"Bhavin Koriya",
			"Description":"Bhavin Dinesh Koriya",
			"Image":"As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man.",

		},
		{
			"Id":"5",
			"Title":"Amit Gupta",
			"Description":"Amit Premchand Gupta",
			"Image":"As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man.",

		}
		];*/

		//console.log($scope.blogs.length);
		//$scope.PostID = null;
		
		/*$scope.BlogTitle = $scope.blog.Title;
		$scope.BlogDescription = $scope.blog.Description;
		$scope.BlogImage = $scope.blog.Image;;

*/

		/*for(var i = 0; i<$scope.blogs.length; i++)
		{
				if($scope.blogs[i].Id == $routeParams.postId)
				{
					$scope.BlogTitle = $scope.blogs[i].Title;
					$scope.BlogDescription = $scope.blogs[i].Description;
					$scope.BlogImage = $scope.blogs[i].Image;

					break;
				}	

		}*/


}])

.controller('ContactCtrl',['$scope',function($scope){

		console.log("Contact Controller Called");

}]);