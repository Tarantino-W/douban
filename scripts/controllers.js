// 1.该模块用于创建项目所需的所有控制器
angular.module('controllers',[])
.controller('navC',['$scope',function($scope){
	//在模型层模拟数据
	$scope.navs=[
				 {"link":"#/today","icon":"icon-home","text":"今日一刻"},
				 {"link":"#/older","icon":"icon-file-empty","text":"往期内容"},
				 {"link":"#/author","icon":"icon-pencil","text":"热门作者"},
				 {"link":"#/category","icon":"icon-menu","text":"栏目浏览"},
				 {"link":"#/favourite","icon":"icon-heart","text":"我的喜欢"},
				 {"link":"#/settings","icon":"icon-cog","text":"设置"}
				];
}])

.controller('todayC',["$scope","$http","$filter","$rootScope",function($scope,$http,$filter,$rootScope){
	$rootScope.title="今日一刻";
	$rootScope.index=0;
	$rootScope.loaded=false;
	// loaded 表示请求数据是否完成
	var now = $filter("date")(new Date(),"yyyy-MM-dd");
	//向官网发送请求获取当前数据
	// $http({
	// 	url:"https://moment.douban.com/api/stream/date/2017-6-09?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6"
	// }).success(function(data){
	// 	console.log(data);
	// });
	// 以上方法存在跨域问题，请求会被官网禁止，解决方案:
	// 可以向php发请求，从后台向官网再发请求
	// 因为success方法已经被淘汰,以后都用then方法,该方法中的回调函数
	// 将数据的具体内容放在退回对象的data里
	$http({
		url:"./api/today.php",
		params:{"now":now}
	}).then(function(data){
		// console.log(data.data);
		$rootScope.loaded=true;
		$scope.datas = data.data;
	})
}])

.controller('olderC',["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	$rootScope.title="往期内容";
	$rootScope.index=1;
	$rootScope.loaded=false;
	$http({
		url:"./api/older.php",
	}).then(function(data){
		$rootScope.loaded=true;
		$scope.datas = data.data;
	})
}])

.controller('authorC',["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	$rootScope.title="热门作者";
	$rootScope.index=2;
	$rootScope.loaded=false;
	$http({
		url:"./api/author.php",
	}).then(function(data){
		$rootScope.loaded=true;
		// console.log(data.data[0]);
		$scope.datas = data.data;
	})
}])














































