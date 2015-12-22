var app=angular.module('we',[]);

app.controller('mainc',function($scope,$http){
     $scope.y=encodeURIComponent(item);
     $http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&order=viewCount&q="+$scope.y +"&type=video&key=AIzaSyBo8ZGrVp0mXWgMQP0DT8seAEQTCtuOvFI")
      .success(function(data){
        $scope.w=data;
        $scope.x=$scope.w.nextPageToken;
                $http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&pageToken=" + $scope.x+ "&maxResults=50&order=viewCount&q="+$scope.y +"&type=video&key=AIzaSyBo8ZGrVp0mXWgMQP0DT8seAEQTCtuOvFI")
              .success(function(data){
                $scope.z=data;


                })
                .error(function(err){
                  return err;
                });


      })
      .error(function(err){
        return err;
      });
  });
