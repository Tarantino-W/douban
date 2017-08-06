// 1.新建模块
	var yike = angular.module('yike',["controllers","ngRoute"]);
// 2.模块创建后立刻在根作用域上绑定toggle方法
	// run方法的作用是模块一旦创建成功立刻执行
	yike.run(['$rootScope',function($rootScope){
		$rootScope.collapsed = false;
		/*toggle方法主要做的事情:
				1.将collasped值取反
				2.将导航栏的具体内容进行移动
		*/
		
		$rootScope.toggle = function(){
			// 1.
			$rootScope.collapsed =!$rootScope.collapsed;
			// 2.找到所有dd节点 并改变所有transform的值
			var dds = document.querySelectorAll('.navs dd');
			if ($rootScope.collapsed) {
				for(var i=0;i<dds.length;i++){
					dds[i].style.transform="translate(0)"
					// 不同的过渡效果
					dds[i].style.transitionDuration=(i+1)*0.15+"s";
				};
			}else{
				for(var i=dds.length-1;i>=0;i--){
					dds[i].style.transform="translate(-100%)"
					// 不同的过渡效果
					dds[i].style.transitionDuration=(dds.length-i)*0.15+"s";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
			}
		}
	}
	}]);

//为了解决AngularJs自动升级时导致的版本不一致,导致路由点击时内容经过转换
	yike.config(function($locationProvider){
		$locationProvider.hashPrefix("")
	})



//配置路由
	yike.config(["$routeProvider",function($routeProvider){
		$routeProvider.when("/today",{
			templateUrl:"./views/today.html",
			controller:"todayC"
		})
		.when("/older",{
			templateUrl:"./views/older.html",
			controller:"olderC"
		})
		.when("/author",{
			templateUrl:"./views/author.html",
			controller:"authorC"
		})
		.otherwise({
			redirectTo:"/today"
		})
	}])














