(function(){
  'use strict';

  angular.module('LunchCheck',[])

  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject=['$scope'];

  function LunchCheckController($scope){


    $scope.checkTooMuch= function()
    {

      var lunchst = $scope.lunchdishes;

        if(lunchst===undefined || lunchst.length == 0 )
        {
            $scope.message= "Please enter data first";
            $scope.modcolor ="red";
        }
        else
        {

          var count=0;
            var luncharr = lunchst.split(",");

            for (var i = 0; i < luncharr.length; i++) {

              var actualst = luncharr[i].trim();
              if(actualst.length > 0)
              count++;
            }

            if(count > 3)
            {
                $scope.message= "Too much!";
            }

            else {
                $scope.message= "Enjoy!";
            }
              $scope.modcolor ="green";
        }

    }
  }


})();
