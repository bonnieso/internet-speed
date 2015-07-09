'use strict';

angular.module('sif')
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/home/welcome.html'})
  .state('page1', {url: '/', templateUrl: '/views/home/page1.html', controller: 'speedCtrl'})
  .state('page2', {url: '/', templateUrl: '/views/home/page2.html', controller: 'speedCtrl'})
  .state('page3', {url: '/', templateUrl: '/views/home/home.html'})
  .state('user', {url: '', templateUrl: '/views/users/user.html', abstract: true})
  .state('user.register', {url: '/register', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('user.login', {url: '/login', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'});
});
