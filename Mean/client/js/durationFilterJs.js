'use strict';

/* Filters */

//var App = angular.module('eventsApp', ['ngSanitize']);
App.filter('durationFilter', function () {
  return function (duration) {
    switch (duration) {
      case 2:
        return "Two Hour";
      case 5:
        return "Five Hour";
      case 9:
        return "Nine Hour";
    }

  }

});