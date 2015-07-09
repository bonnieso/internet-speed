'use strict';

var speed = angular.module('sif', ['firebase', 'ui.router']);

speed.controller("funCtrl", function($scope, FunFactory){
  console.log('test loaded');
  
  var fun = new FunFactory();
  
  $scope.stuff=function(){
    FunService.getUserStuff()
      .success(function(data){
        $scope.data = data;
      })
      .error(function(err){
        console.log(err);
      });
  };
  
});

speed.factory('FunFactory', function(){
  var Fun = {};
  
  Fun.getUserStuff = function($http){
    return $http.get('https://api.github.com/users/cadenichols');
  };
  
  return Fun;
});

speed.service("FunService", function($http){
  this.getUserStuff = function(){
    return $http.get('https://api.github.com/users/cadenichols');
  };
});

