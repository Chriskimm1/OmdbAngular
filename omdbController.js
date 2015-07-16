angular.module('Omdb.controllers', [])

.controller('moviesCtrl', function($scope, Movies){
        $scope.findMovies = function($event){
            $event.preventDefault();
            Movies.find($scope.searchText).then(function(data){
                $scope.ajaxResonse = data;
                $scope.movies = data;
                console.log(data)
            })
        }
    })