'use strict';

var speed = angular.module('sif', ['firebase', 'ui.router']);

speed.factory("Counter", function(){
  var Count = {};

  Count.totalCount = 0;

  Count.minus = function(counter){
    if(counter > 0){
      counter -=1;
      Count.totalCounter(-1);
    }
    return counter;
  };

  Count.plus = function(counter){
    Count.totalCounter(1);
    return counter +=1;
  };

  Count.totalCounter = function(num){
    console.log(this.totalCount);
    return this.totalCount+=num;
  };

  return Count;

});

speed.controller("speedCtrl", function($scope, Counter){
  $scope.totalCounter = Counter.totalCount;
  //count computers
  $scope.computerCounter = 0;

  $scope.computerMinus = function (){
    if($scope.computerCounter > 0){
      $scope.computerCounter -=1;
      $scope.totalCounter -=1;
    }
  };

  $scope.computerPlus = function (){
    $scope.computerCounter +=1;
    $scope.totalCounter +=1;
  };

  //count phones
  $scope.phoneCounter = 0;

  $scope.phoneMinus = function (){
    if($scope.phoneCounter > 0){
      $scope.phoneCounter -=1;
      $scope.totalCounter -=1;
    }
  };

  $scope.phonePlus = function (){
    $scope.phoneCounter +=1;
    $scope.totalCounter +=1;
  };

  //count games
  $scope.gameCounter = 0;

  $scope.gameMinus = function (){
    if($scope.gameCounter > 0){
      $scope.gameCounter -=1;
      $scope.totalCounter -=1;
    }
  };

  $scope.gamePlus = function (){
    $scope.gameCounter +=1;
    $scope.totalCounter +=1;
  };

  //count tvs
  $scope.tvCounter = 0;

  $scope.tvMinus = function (){
    if($scope.tvCounter > 0){
      $scope.tvCounter -=1;
      $scope.totalCounter -=1;
    }
  };

  $scope.tvPlus = function (){
    $scope.tvCounter +=1;
    $scope.totalCounter +=1;
  };

  //page2

  $scope.intUseCounter = 0;

  $scope.intUseMinus = function(){
    $scope.intUseCounter = Counter.minus($scope.intUseCounter);
  };

  $scope.intUsePlus = function(){
    $scope.intUseCounter = Counter.plus($scope.intUseCounter);
  };

});
