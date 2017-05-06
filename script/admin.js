
var admin = {};

/*主模块*/
admin.main = angular.module('mainApp',[
		'ngRoute',
		'navApp',
		'contentApp'
	])

/*设置路由*/
admin.main.config([
		'$routeProvider',
		function ($routeProvider) {
			$routeProvider.when('/group',{
				templateUrl:'html/group.html',
				controller:'groupController'
			})
			.when('/sponsors',{
				templateUrl:'partial/homepage/homepage.html',
				controller:'homepageCtrl'
			})
			.when('/password',{
				templateUrl:'partial/homepage/homepage.html',
				controller:'homepageCtrl'
			})
			.when('/setting',{
				templateUrl:'partial/homepage/homepage.html',
				controller:'homepageCtrl'
			})
			.otherwise({
				redirectTo: '/group'
			})
		}
	])

/*左侧导航模块*/
admin.nav = angular.module('navApp',[]);

admin.nav.controller('navController',[
	'$scope',
	function ($scope) {
		$scope.head_img='#';
		$scope.nav=[
			{
				icon:'glyphicon glyphicon-list',
				name:'参赛成员',
				path:'group',
				active:true
			},
			{
				icon:'glyphicon glyphicon-eur',
				name:'赞助商',
				path:'sponsors'
			},
			{
				icon:'glyphicon glyphicon-download-alt',
				name:'修改密码',
				path:'password'
			},
			{
				icon:'glyphicon glyphicon-cog',
				name:'设置',
				path:'setting'
			},
		];


		$scope.changeActive=function (data) {
			$scope.nav.forEach( function(element, index) {
				element.active=false;
			});	
			data.active=true;

		}

	}
])


/*右侧内容模块*/

admin.content = angular.module('contentApp',[]);

admin.content.controller('groupController',[
	'$scope',
	function ($scope) {
		$scope.members=[
			{
				id:1,
				cn_name:'张小红',
				en_name:'xiaohong',
				age:18,
				jiguan:'浙江省义乌市',
				saiqu:'浙江省义乌市',
				isChecked:false,
				head_img:'#'
			}
		]

		for(var i = 1 ; i < 888; i++ ){
			$scope.members[i] = {};
			for(var k in $scope.members[0]){

				$scope.members[i][k]=$scope.members[0][k];
				$scope.members[i]['id']=i+1;
			}
		}


		$scope.pageIndex =1;//当前页码
		$scope.pageNumber=15;//每页显示个数
		$scope.pageCounts = Math.ceil($scope.members.length/$scope.pageNumber)//总页数

		$scope.showList = $scope.members.slice(($scope.pageIndex-1)*$scope.pageNumber, $scope.pageIndex*$scope.pageNumber)

		$scope.selectPage = function ($event,index) {
			$event.preventDefault();
			console.log(index)
			$scope.pageIndex = index;
			$scope.showList = $scope.members.slice(($scope.pageIndex-1)*$scope.pageNumber, $scope.pageIndex*$scope.pageNumber)
		}
		
		$scope.isOdd = function ($index) {
			if ($index % 2 !== 0) {
				return true;
			};
		}
		console.log($scope)
	}
])
