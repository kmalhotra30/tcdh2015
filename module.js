var app=angular.module('we',[]);

app.controller('mainc',function($scope,$http){
     $scope.y=encodeURIComponent(item);
     $http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&order=viewCount&q="+$scope.y +"&type=video&key=API_KEY")
      .success(function(data){
        $scope.w=data;
      })
      .error(function(err){
        return err;
      });
  });
