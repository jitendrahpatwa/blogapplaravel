angular.module('myAngularBlog')

.service('MyBlogs',function(){

	var	blogs = 
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
		];


		return {
				    all: function() {
				      	return blogs;
				    },
				    get: function(PostId) {
						for (var i = 0; i < blogs.length; i++) 
						{
							if (blogs[i].Id === PostId) {
							  return blogs[i];
							}
						}
						return null;
				    }
			  };

})