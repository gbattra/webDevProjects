//service for app

app.factory('getNews', ['$http', function ($http) { 
  return $http.get('https://s3.amazonaws.com/randomdocs/jsonFile.json')
  			.success(function (data) { 
              return data; 
            }) 
            .error(function (err) { 
              return err; 
            }); 
}]);
