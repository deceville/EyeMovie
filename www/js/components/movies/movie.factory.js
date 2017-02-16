'use strict';
angular
  .module('movie')
  .factory('MovieFactory', MovieFactory);

//factory to query movies using themoviedb API
function MovieFactory(RequestFactory) {

  //public api
  var factory = {
    getMovies: getMovies,
    getUpcoming: getUpcoming,
    getTop_Rated: getTop_Rated,
    getLatest: getLatest,
    search: search
  };

  return factory;

  //return popular movies, 20 per time
  //page: used for pagination
  function getMovies(page) {
    return RequestFactory.request('movie/popular', page);
  }

  //return upcoming movies, 20 per time
  //page: used for pagination
  function getUpcoming(page){
    return RequestFactory.request('movie/upcoming', page);
  }

  //return top rated movies, 20 per time
  //page: used for pagination
  function getTop_Rated(page){
    return RequestFactory.request('movie/top_rated', page);
  }

  //return top rated movies, 20 per time
  //page: used for pagination
  function getLatest(page){
    return RequestFactory.request('movie/latest', page);
  }

  function search(query, page){
    return RequestFactory.request('search/movie',page, [{key:'query',value: query}]);
  }

}
