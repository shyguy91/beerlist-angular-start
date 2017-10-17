app.factory('beerFactory', function($http){

    var getBeers = function(){
        return $http({
            method: 'GET',
            url: '/beers'
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            return angular.copy(response.data);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(response);
        });
    }

    var addBeer = function(newBeerObj){
        return $http({
            method: 'POST',
            url: '/beers',
            data: newBeerObj
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            return angular.copy(response.data);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(response);
        });
    }

    var deleteBeer = function(beerToRemove){
        var id = beerToRemove.beer._id;
        return $http({
            method: 'DELETE',
            url: '/beers/' + id
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            return angular.copy(response.data);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(response);
        });
    }

    return {
        getBeers:getBeers,
        addBeer:addBeer,
        deleteBeer:deleteBeer
    }
});

// There should be a way to add a beer to the DB via our server
// There should be a way to remove a beer from the DB via our server
// There should be a way to get the beers from the DB via our server