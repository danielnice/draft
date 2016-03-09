angular.module('events', [
  'common'
]).controller('eventsCtrl', function($scope, $timeout, dataService, $ionicSlideBoxDelegate, $ionicScrollDelegate) {
  
  //////////////////////
  //Variable Setup
  //////////////////////
  var today = 1451649600 * 1000,
      titleArr = [];

  $scope.gameLists = [];
  $scope.activeSlide = 7;
  $scope.title = null;


  //November 1st


  //////////////////////
  //Init
  //////////////////////
  init();
  function init(){
  	
    //Get game data and set page titles
    dataService.getData('games').then( function (data) {

      //Game object and title arr setup
      var tmpGames = {};
      for (var i = -7; i < 8; i++) {
        var newDate = new Date(today);
        newDate = new Date(newDate.setDate(newDate.getDate() + i));

        var day = numToDateStr(newDate.getDate()),
            month = numToDateStr(newDate.getMonth() + 1),
            year = newDate.getFullYear(),
            dateId = 'YMD' + year + month + day;

        tmpGames[dateId] = [];

        //Set title array
        titleArr.push(getDateTitle(today, i));
      }
      
      //Set title to scope
      $scope.title = titleArr[$scope.activeSlide];

      //Iterate through data then insert into object at correct location
      for (var i = data.length - 1; i >= 0; i--) {

        var date = new Date(data[i].dateTime*1000),
            day = numToDateStr(date.getDate()),
            month = numToDateStr(date.getMonth() + 1),
            year = date.getFullYear(),
            dateId = 'YMD' + year + month + day;

        //Create dateId array if not created
        if(!tmpGames[dateId]){
          tmpGames[dateId] = [];
        }

        //Set game into appropriate dateId grouping
        tmpGames[dateId].push(data[i]);
        
      }

      //Order array of day ids
      var tmpSortArr = [];
      for(var id in tmpGames){
        tmpSortArr.push(id);
      }
      tmpSortArr.sort();

      //Push values into array of objects in correct order
      for (var i = 0; i < tmpSortArr.length; i++) {
        $scope.gameLists.push(tmpGames[tmpSortArr[i]]);
      }

    });
  }  //end init


  //////////////////////
  //Scope Functions
  //////////////////////
  $scope.showDate = function(){
    console.log('showDate');
    //$scope.active.datePicker = !$scope.active.datePicker;
  };

  $scope.slideChange = function(index){
    


    $scope.titleMotionOut = true;

    $timeout(function() {
      $scope.title = titleArr[index];
      $scope.titleMotionOut = false;
      $scope.titleMotionIn = true;
      $timeout(function(){
        $scope.titleMotionIn = false;
      }, 250);
    }, 250);

    //reset scroll
    $ionicScrollDelegate.scrollTop();
  };

  $scope.play = function(id){
    console.log(id);
  };


  //////////////////////
  //Utility Functions
  //////////////////////
  function numToDateStr(num){
    num = num.toString();
    if(num.length === 1){
      return '0' + num;
    } else {
      return num;
    }
  }

  function getDateTitle(date, val){
    var d = new Date(date);

    switch(val){
      case 0:
        return 'Today';
      case 1:
        return 'Tomorrow';
      case -1:
        return 'Yesterday';
      default:
        d.setDate(d.getDate() + val);
        var month = getMonthName(d),
            day = getDaySuffix(d),
            dayOfWeek = getDayOfWeek(d);
        return dayOfWeek + ' ' + month + ' ' + day;
    }
  }

  function getMonthName(date){
    var month = date.getMonth();
    switch(month){
      case 0:
        return 'Jan';
      case 1:
        return 'Feb';
      case 2:
        return 'Mar';
      case 3:
        return 'Apr';
      case 4:
        return 'May';
      case 5:
        return 'Jun';
      case 6:
        return 'Jul';
      case 7:
        return 'Aug';
      case 8:
        return 'Sep';
      case 9:
        return 'Oct';
      case 10:
        return 'Nov';
      case 11:
        return 'Dec';
    }
  }

  function getDayOfWeek(date){
    var day = date.getDay();
    switch(day){
      case 0:
        return 'Sun';
      case 1:
        return 'Mon';
      case 2:
        return 'Tue';
      case 3:
        return 'Wed';
      case 4:
        return 'Thu';
      case 5:
        return 'Fri';
      case 6:
        return 'Sat';
    }
  }

  function getDaySuffix(date){
    var day = date.getDate(),
        j = day % 10,
        k = day % 100;
    if (j == 1 && k != 11) {
        return day + "st";
    }
    if (j == 2 && k != 12) {
        return day + "nd";
    }
    if (j == 3 && k != 13) {
        return day + "rd";
    }
    return day + "th";
  }

})