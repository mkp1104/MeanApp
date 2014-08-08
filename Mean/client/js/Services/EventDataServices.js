'use strict';
//App.factory('eventData', function ($http, $q) {
App.factory('eventData', function ($resource) {


  var resource = $resource('/data/event/:id', { id: '@id' });
  return {
    getEvent: function () {
      //      var deffered = $q.defer();
      //      $http({ method: 'GET', url: '/data/event/1' }).
      //              success(function (data, status, headers, config) {
      //                //                $log.info(data, status, headers(), config);
      //                deffered.resolved(data);
      //              }).error(function (data, status, headers, config) {
      //                //                $log.warn(data, status, headers(), config);
      //                deffered.reject(status);
      //              });
      //      return deffered.promise;
      //      return $resource('/data/event/:id', { id: '@id' }).get({id:1});
      return resource.get({ id: 1 });
      //      name: 'Angular Js',
      //      date: '1/2/2010',
      //      time: '10:30 am',
      //      location: {
      //        address: 'Google HeadQuarters',
      //        city: 'Mountain View(C.A)',
      //        province: '(U.S.A)'
      //      },
      //      imageUrl: 'img/anguralBlue.png',
      //      /// <reference path="../../img/anguralBlue.png" />/// <reference path="../../img/anguralBlue.png" />


      //      sessions: [
      //  {
      //    name: 'Manish Prasad Advanced',
      //    age: '23',
      //    address: 'India(Earth)',
      //    duration: 2,
      //    level: 'Advanced',

      //    upVoteCount: 3
      //  },
      //  {
      //    name: 'Raghav Sinha Introductory',
      //    age: '23',
      //    address: 'India(Earth)',
      //    duration: 5,
      //    level: 'Introductory',

      //    upVoteCount: 8
      //  },
      //  {
      //    name: 'Salman Khan',
      //    age: '23',
      //    address: 'India(Earth)',
      //    duration: 9,
      //    level: 'Intermediate',

      //    upVoteCount: 10
      //  }
      //  ]

    },
    save: function (event) {
      event.id = 1;
      return resource.save(event);
    }


  };


});