(function(){
  'use strict';

  angular.module('ReadingJsonFileDemoApp',[]).
  controller('ReadJsonFileController',ReadJsonFileController);

  ReadJsonFileController.$inject=['$http'];
  function ReadJsonFileController($http){
    var $ctrl=this;
    $ctrl.empDetails=[];
    $ctrl.flag=0;
    $ctrl.readJsonFile=function(){
      var promise=$http.get('emp.json');
      promise.then(function(res){
        console.log(res.data);
        $ctrl.empDetails=res.data;
        $ctrl.flag=1;
      })
      .catch(function(){
        console.log("Failed to read json file");
      });
    };

  }

})();
