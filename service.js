angular.module("Omdb.services", [])
    .factory("Movies", function($http){
        return {
            find: function(searchText){
              return  $http.get("http://omdbapi.com/?t=" + searchText)
            }
        }
    });