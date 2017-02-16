'use strict';
//retriving the movie module
var movieModule = angular.module('movie');

movieModule.controller('MoviesTopRatedController', MoviesTopRatedController)

function MoviesTopRatedController($scope, $controller, MovieFactory) {
  //method that will be called from MoviesBaseController to load movies
  $scope.load =  MovieFactory.getTop_Rated;
  //make MoviesBaseController $scope available
  $controller('MoviesBaseController', {$scope: $scope});
}
