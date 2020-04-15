'use strict';

var app = angular.module('create-course', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl : 'views/home.html',
            controller  : 'MainCtrl',
            controllerAs: 'mainCtrl',
        })
        .state('createcourse', {
            url: '/createcourse',
            templateUrl : 'views/createCourse.html',
            controller  : 'CreateCourseCtrl',
            controllerAs: 'createCourseCtrl',
        })
    $urlRouterProvider.otherwise('/');
});
