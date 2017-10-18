app.factory('beerFactory', function($http){

    var getBeers = function(){
        return $http({
            method: 'GET',
            url: '/beers'
        }).then(function successCallback(response) {
            return angular.copy(response.data);
        }, function errorCallback(response) {
            console.log(response);
        });
    }

    var getBeer = function(id){
        return $http({
            method: 'GET',
            url: '/beers/' + id
        }).then(function successCallback(response) {
            return angular.copy(response.data);
        }, function errorCallback(response) {
            console.log(response);
        });
    }

    var addBeer = function(newBeerObj){
        return $http({
            method: 'POST',
            url: '/beers',
            data: newBeerObj
        }).then(function successCallback(response) {
            return angular.copy(response.data);
        }, function errorCallback(response) {
            console.log(response);
        });
    }

    var deleteBeer = function(beerToRemove){
        var id = beerToRemove.beer._id;
        return $http({
            method: 'DELETE',
            url: '/beers/' + id
        }).then(function successCallback(response) {
            return angular.copy(response.data);
        }, function errorCallback(response) {
            console.log(response);
        });
    }

    var addReview = function(id, newReviewObj){
        return $http({
            method: 'POST',
            url: '/beers/' + id + '/reviews',
            data: newReviewObj
        }).then(function successCallback(response) {
            return angular.copy(response.data);
        }, function errorCallback(response) {
            console.log(response);
        });
    }

    var removeReview = function(id, reviewIndex){
        return $http({
            method: 'DELETE',
            url: '/beers/' + id + '/reviews/' + reviewIndex,
        }).then(function successCallback(response) {
            return angular.copy(response.data);
        }, function errorCallback(response) {
            console.log(response);
        });
    }

    return {
        getBeers:getBeers,
        getBeer:getBeer,
        addBeer:addBeer,
        deleteBeer:deleteBeer,
        addReview:addReview,
        removeReview:removeReview
    }
});

// There should be a way to add a beer to the DB via our server
// There should be a way to remove a beer from the DB via our server
// There should be a way to get the beers from the DB via our server