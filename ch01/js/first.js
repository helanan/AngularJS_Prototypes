var myMod = angular.module('myMod', []);

//config
myMod.config(function($provide) {
    $provide.value("configTime", new Date());
    $provide.value("runTime", new Date());
    for(var x=0; x<1000000000; x++) {
        var y = Math.sqrt(Math.log(x));
    }
});

//run
myMod.run(function(configTime, runTime, $rootScope) {
    runTime.setTime((new Date()).getTime());
    $rootScope.rootValue = 5;
});

myMod.controller('fifthController', ['$scope', 'configTime', 'runTime',
    function($scope, configTime, runTime) {
    $scope.configTime = configTime;
    $scope.runTime = runTime;
}])

myMod.controller('sixthController', function($scope, $rootScope) {
    $scope.value = 10;
    $scope.difference = function() {
        return $rootScope.rootValue - $scope.value;
    };
});

myMod.value('modMsg', 'Hello from My Module');
myMod.controller('thirdController', ['$scope', 'modMsg', function($scope, msg) {
    $scope.message = msg;
}]);

//first module instance: seniorLiving
var seniorLiving = angular.module('seniorLiving', ['myMod']);
seniorLiving.value('appMsg', 'Hello From My App');

//fourth controller - appMsg, appMsg function
seniorLiving.controller('fourthController', ['$scope', 'appMsg', function($scope, msg) {
    $scope.message = msg;
}]);

//second controller - scoped to window, alert
seniorLiving.controller('secondController', ['$scope', '$window', function($scope, $window){
    $scope.message = "My Module Has Loaded!";
    $window.alert($scope.message);
}]);

//first controller - update message function
seniorLiving.controller('FirstController', function($scope) {
    $scope.first = 'First';
    $scope.last = 'Last';
    $scope.heading = 'Message: ';
    $scope.updateMessage = function() {
        $scope.message = 'Hello ' + $scope.first +' '+ $scope.last + '!';
    };
});

myMod.value('start', 200);
myMod.controller('counterController', ['$scope', 'start', function($scope, start) {
    $scope.start = start;
    $scope.current = start;
    $scope.difference = 0;
    $scope.change = 1;
    $scope.inc = function() {
        $scope.current += $scope.change;
        $scope.calcDiff();
    };
    $scope.dec = function() {
        $scope.current -= $scope.change;
        $scope.calcDiff();
    };
    $scope.calcDiff = function() {
        $scope.difference = $scope.current - $scope.start;
    };
}]);
