(function() {
    'use strict';
  
    angular.module('create-course').controller('MainCtrl', MainCtrl);
  
    function MainCtrl(
      $scope,
      $http
    ) {
      var vm = this;
      
      vm.getCourses = function() {
        $http({
          method: 'GET',
          url: 'http://localhost:8000/course/courses/'
        }).then(function successCallback(response) {
          vm.loading = false;
          vm.courses = response.data;
        }, function errorCallback(response) {
          vm.loading = false;
          vm.courses = [];
        });
      }
      
      function init() {
        vm.loading = true;
        vm.getCourses();
      }
      init()
    }
})();
  