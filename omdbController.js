angular.module('Omdb.controllers', [])

.controller('moviesCtrl', function($scope, Movies){
        $scope.findMovies = function($event){
            $event.preventDefault();
            Movies.find($scope.searchText).then(function(data){
                $scope.movies = data;
                console.log(data)
            })
        }

        $scope.showMovieInfo = function(title) {
            Movies.findByTitle(title).then(function(data){
                $scope.movie = data
                console.log(data)
            })
        }
    })