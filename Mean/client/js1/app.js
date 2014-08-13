
// create angular app
var validationApp = angular.module('validationApp', ['ngResource','SaveFormServices']);
  //mandatory skill controller!!!

//validationApp.controller('mainController', function ($scope, comments) {
//    $scope.comments = {};
//    $scope.


//});
angular.module('SaveFormServices', [])
    .factory('FormService', function ($http,$location) {
      return {

        save: function (user) {
          return $http({
            method: "POST",
            url: '/userForm',
            data: user
          }).success(function (data, status, headers, config) {
            console.log('DATA:'+ data);
            console.log('status:'+status);
            console.log('Header'+headers);
            console.log('Config:'+config);
            alert('WoW...!!! You Have Submited Form Data to MongoDB SuccessFull!!!!..Well Done...Keep..It..Up');


          }).error(function (data, status, headers, config) {
            console.log('DATA:' + data);
            console.log('status:' + status);
            console.log('Header' + headers);
            console.log('Config:' + config);
          })

        }
      }

    });


    validationApp.controller('mainController', function mainController($scope, FormService) {

      $scope.user = {};
      // function to submit the form after all validation has occurred			
      $scope.submitForm = function () {

        // check to make sure the form is completely valid
        if ($scope.userForm.$valid) {
          console.log($scope.user);
          console.log('Submiting!!!!!!!!!!!');

          FormService.save($scope.user);

          $scope.user.candidatename = null;
          $scope.user.projectname = null;
          $scope.user.practiceArea = null;
          $scope.user.requester = null;
          $scope.user.interviewername = null;
          $scope.user.signature = null;
          $scope.user.date = null;
          $scope.user.skillsReff1 = [];
          $scope.user.skillsReff2 = [];
          $scope.user.comments = null;
          
        }

      };
    });

validationApp.controller('MSController', function ($scope) {
    $scope.user.skillsReff1 = [];
    
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
        $scope.reff1 = angular.copy(defaultForm);
    }

});

	//optional skill controller

	validationApp.controller('OPController', function ($scope) {
	    $scope.user.skillsReff2 = [];
	   
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
	    $scope.reff2 = angular.copy(defaultForm);
	  }

	});


	// create angular controller





