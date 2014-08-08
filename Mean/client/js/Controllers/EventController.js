'use strict';
var App = angular.module('eventsApp', ['ngSanitize','ngResource']);
//App.filter('durationFilter', function () {
//  return function (duration) {
//    switch (duration) { 
//    case 2 : 
//    return "Two Hour";
//    case 5 : 
//    return "Five Hour";
//    case 9 : 
//    return "Nine Hour";
//    }

//  }

//});
App.controller('EventController', function EventController($scope, eventData) {

  $scope.snippet = '<span style="color:red">Hi Dear</span>';
  $scope.boolvalue = true;
  $scope.myStyle = { color: 'red' };
  $scope.myClass = "Blue";
  $scope.buttonDisable = true;
  //  $scope.sortorder = 'name';
  //  eventData.getEvent(function (event) {
//  $scope.event = eventData.getEvent().then(function (event) { $scope.event = event; }, function (status) { console.log(status); });
//  $scope.event = eventData.getEvent();
  eventData.getEvent().$promise.then(
 (function (event) { $scope.event = event; }, function (status) { console.log(status); })
  );
  //  });
  //  $scope.event = {
  //    name: 'Angular Js',
  //    date: '1/2/2010',
  //    time: '10:30 am',
  //    location: {
  //      address: 'Google HeadQuarters',
  //      city: 'Mountain View(C.A)',
  //      province: '(U.S.A)'
  //    },
  //    imageUrl: 'img/anguralBlue.png',
  //    /// <reference path="../../img/anguralBlue.png" />/// <reference path="../../img/anguralBlue.png" />


  //    sessions: [
  //  {
  //    name: 'Manish Prasad Advanced',
  //    age: '23',
  //    address: 'India(Earth)',
  //    duration: 2, 
  //    level: 'Advanced',
  //    
  //    upVoteCount: 3
  //  },
  //  {
  //    name: 'Raghav Sinha Introductory',
  //    age: '23',
  //    address: 'India(Earth)',
  //    duration: 5, 
  //    level: 'Introductory',
  //   
  //    upVoteCount: 8
  //  },
  //  {
  //    name: 'Salman Khan',
  //    age: '23',
  //    address: 'India(Earth)',
  //    duration: 9, 
  //    level: 'Intermediate',
  //    
  //    upVoteCount: 10
  //  }
  //  ]

  //  }

  $scope.upVoteSession = function (session) {
    session.upVoteCount++;
  };
  $scope.downVoteSession = function (session) {
    session.upVoteCount--;
  };


}
);