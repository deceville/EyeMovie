'use strict';
//retriving the movie module
var movieModule = angular.module('movie');

movieModule.controller('MoviesLatestController', MoviesLatestController)

function MoviesLatestController($scope, $controller, MovieFactory) {
  //method that will be called from MoviesBaseController to load movies
  $scope.load =  MovieFactory.getLatest;
  //make MoviesBaseController $scope available
  $controller('MoviesBaseController', {$scope: $scope});
}
