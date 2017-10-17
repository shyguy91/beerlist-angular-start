app.controller('mainCtrl', ['$scope', 'beerFactory', function ($scope, beerFactory) {
    $scope.beers = [];

    $scope.name = "";
    $scope.style = "";
    $scope.abv = "";
    $scope.image = "";

    $scope.addBeer = function () {
        var newBeerObj = {
            name: $scope.name,
            style: $scope.style,
            abv: $scope.abv,
            image_url: $scope.image
        };
        beerFactory.addBeer(newBeerObj)
            .then(function (beer) {
                $scope.beers.push(beer);
            })
            .catch(function (error) {
                console.log(error)
            });
    };
    $scope.removeBeer = function () {
        beerFactory.deleteBeer(this)
            .then(function (beer) {
                $scope.beers.splice($scope.beers.indexOf(beer), 1);
            })
            .catch(function (error) {
                console.log(error)
            });
    };

    beerFactory.getBeers()
        .then(function (beers) {
            $scope.beers = beers;
        })
        .catch(function (error) {
            console.log(error)
        });
}]);

// It should have an array of beers on it's $scope (so the view can display them)
// There should be a function for adding a beer (via a form on the view)
// There should be a function for removing a beer (via a button on the view)
// When the app is loaded it should fetch all the beers (via the beer factory)