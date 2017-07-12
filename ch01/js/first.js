var myMod = angular.module('myMod', []);
myMod.value('modMsg', 'Hello from My Module');
myMod.controller('thirdController', ['$scope', 'modMsg', function($scope, msg) {
    $scope.message = msg;
}]);

var seniorLiving = angular.module('seniorLiving', ['myMod']);
seniorLiving.value('appMsg', 'Hello From My App');
seniorLiving.controller('fourthController', ['$scope', 'appMsg', function($scope, msg) {
    $scope.message = msg;
}]);

seniorLiving.controller('secondController', ['$scope', '$window', function($scope, $window){
    $scope.message = "My Module Has Loaded!";
    $window.alert($scope.message);
}]);

seniorLiving.controller('FirstController', function($scope) {
    $scope.first = 'First';
    $scope.last = 'Last';
    $scope.heading = 'Message: ';
    $scope.updateMessage = function() {
        $scope.message = 'Hello ' + $scope.first +' '+ $scope.last + '!';
    };
});
