
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
            url: 'api/userForm',
            data: user
          }).success(function (data, status, headers, config) {
            console.log('DATA:'+ data);
            console.log('status:'+status);
            console.log('Header'+headers);
            console.log('Config:'+config);
            alert('WoW...!!! You Have Submited Form Data to MongoDB SuccessFull!!!!..Well Done...Keep..It..Up');
			alert('calling callback function()-GET....' + $http({
		method:'GET',
		url:'api/getAllUserFormData'
		
		}).success(function (data, status, headers, config) {
            console.log('DATA:'+ data);
            console.log('status:'+status);
            console.log('Header'+headers);
            console.log('Config:'+config);
			alert('DATA:' + data);
			}).error(function (data, status, headers, config) {
            console.log('DATA:' + data);
            console.log('status:' + status);
            console.log('Header' + headers);
            console.log('Config:' + config);
          }))
		  user.candidatename = null;
          user.projectname = null;
          user.practiceArea = null;
          user.requester = null;
          user.interviewername = null;
          user.signature = null;
          user.date = null;
          user.skillsReff1 = [];
          user.skillsReff2 = [];
          user.comments = null;
					 
	//	  user.$setPristine(); 
					 

          }).error(function (data, status, headers, config) {
            console.log('DATA:' + data);
            console.log('status:' + status);
            console.log('Header' + headers);
            console.log('Config:' + config);
          })

        },
		get: function (){
		return $http({
		method:'GET',
		url:'api/getAllUserFormData'
		
		}).success(function (data, status, headers, config) {
            console.log('DATA:'+ data);
            console.log('status:'+status);
            console.log('Header'+headers);
            console.log('Config:'+config);
			alert('DATA:' + data);
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
		console.log("$pristine = " + $scope.userForm.$pristine);
		$scope.userForm.$setPristine();
          FormService.save($scope.user);
		 //FormService.get();
		//  FormService.get(); it should be a callback function!!!!!
		 
        
          
        
	  }
      }
		   
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





