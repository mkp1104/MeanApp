
// create angular app
var validationApp = angular.module('validationApp', ['ngResource','SaveFormServices']);
  //mandatory skill controller!!!

//validationApp.controller('mainController', function ($scope, comments) {
//    $scope.comments = {};
//    $scope.


//});
   angular.module('SaveFormServices', [])
    .factory('FormService', function ($http) {
        return {

            save: function (user) {
                return $http({
                    method: "POST",
                    url: '/bears',
                    data: user

                })

            }
        }

    });


    validationApp.controller('mainController', function mainController($scope,FormService) {

        $scope.user = {};
    // function to submit the form after all validation has occurred			
    $scope.submitForm = function () {

        // check to make sure the form is completely valid
        if ($scope.userForm.$valid) {
            console.log($scope.user);
            console.log('Submitiing!!!!!!!!!!!');
            alert('our form is amazing');
            FormService.save($scope.user);
        }

    };
});

validationApp.controller('MSController', function ($scope) {
    $scope.user.skillsReff1 = [];
    $scope.reff1 = [{}];
    var defaultForm = {
        skillname: "",
        jrssRating: "",
        interviewerRating: ""
    };
    $scope.addSkills = function (reff) {
        //	    var skill = {
        //	      skillname: $scope.name,
        //	      jrssRating: $scope.jrssrating,
        //	      interviewerRating: $scope.interviewrating


        //	    };
        $scope.user.skillsReff1.push(reff);
        console.log(reff);
        $scope.user.reff1 = angular.copy(defaultForm);
    }

});

	//optional skill controller

	validationApp.controller('OPController', function ($scope) {
	    $scope.user.skillsReff2 = [];
	    $scope.reff1 = [{}];
	  var defaultForm = {
	    skillname: "",
	    jrssRating: "",
	    interviewerRating: ""
	  };
	  $scope.addSkills = function (reff) {
	    //	    var skill = {
	    //	      skillname: $scope.name,
	    //	      jrssRating: $scope.jrssrating,
	    //	      interviewerRating: $scope.interviewrating


	    //	    };
	    $scope.user.skillsReff2.push(reff);
	    console.log(reff);
	    $scope.user.reff2 = angular.copy(defaultForm);
	  }

	});


	// create angular controller





