angular.module("Omdb.services", [])
    .factory("Movies", function($http){
        return {
            find: function(searchText){
              return $http.get("http://omdbapi.com/?s=" + searchText).then(function(data) {
                  return data.data.Search;
              })
            },

            findByTitle: function(movieTitle){
                return $http.get("http://omdbapi.com/?t=" + movieTitle).then(function(data) {
                    return data.data;
                })
            }
        }
    });