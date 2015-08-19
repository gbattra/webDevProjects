// maincontroller

app.controller('MainController', ['$scope','getNews', function ($scope, getNews) {
	getNews.success(function (data) {
		$scope.newsData = data.news;
	});
}]);
