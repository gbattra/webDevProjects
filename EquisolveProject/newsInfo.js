//angular directive

app.directive('newsInfo', 
              function(){
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    template: '<h3>{{ info.title }}</h3>' + '<p>{{ info.published }}</p>'
  };
});