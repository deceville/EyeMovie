'use strict';
//retriving the movie module
var movieModule = angular.module('movie');

movieModule.controller('MoviesUpcomingController', MoviesUpcomingController)

function MoviesUpcomingController($scope, $controller, MovieFactory) {
  //method that will be called from MoviesBaseController to load movies
  $scope.load =  MovieFactory.getUpcoming;
  //make MoviesBaseController $scope available
  $controller('MoviesBaseController', {$scope: $scope});
}
