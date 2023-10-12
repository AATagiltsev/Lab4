angular.module('myApp', []).
    controller('myAgeController', function ($scope) {
        $scope.getAge = function () {
            return $scope.birthYear ? (new Date().getFullYear() - $scope.birthYear.getFullYear()) + "," + (new Date().getMonth() - $scope.birthYear.getMonth()) : "Укажите месяц и год";
        }
    });