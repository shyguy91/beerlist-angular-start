app.controller('beerCtrl', ['$scope', '$stateParams', 'beerFactory', function ($scope, $stateParams, beerFactory) {
    $scope.beer = $stateParams.beerParam;
    $scope.review = "";
    $scope.reviews = null;
    if($stateParams.beerParam) 
        $scope.reviews = angular.copy($stateParams.beerParam.reviews);

    $scope.addReview = function () {
        beerFactory.addReview($stateParams.id, { text: $scope.review })
            .then(function (beer) {
                $scope.reviews.push(beer.reviews[beer.reviews.length - 1]);
            })
            .catch(function (error) {
                console.log(error)
            });
    };

    $scope.removeReview = function(index) {
        beerFactory.removeReview($stateParams.id, index)
        .then(function (beer) {
            $scope.reviews.splice(index, 1);
        })
        .catch(function (error) {
            console.log(error)
        });
    }

    if ($stateParams.beerParam == null) {
        beerFactory.getBeer($stateParams.id)
            .then(function (beer) {
                $scope.beer = beer;
                $scope.reviews = beer.reviews;
            })
            .catch(function (error) {
                console.log(error)
            });
    }
}]);