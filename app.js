(function(){
  'use strict';

  angular.module('LunchCheck',[])

  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject=['$scope'];

  function LunchCheckController($scope){


    $scope.checkTooMuch= function()
    {
      var lunchst ="";
      lunchst = $scope.lunchdishes;

        if(lunchst.length == 0)
        {
            $scope.message= "Please enter data first";
        }
        else
        {
            var luncharr = lunchst.split(",");

            if(luncharr.length > 3)
            {
                $scope.message= "Too much!";
            }

            else {
                $scope.message= "Enjoy!";
            }
        }

    }
  }


})();
