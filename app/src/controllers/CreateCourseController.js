(function() {
    'use strict';
  
    angular.module('create-course').controller('CreateCourseCtrl', CreateCourseCtrl);
  
    function CreateCourseCtrl(
      $scope,
      $http
    ) {
        var vm = this;
      
        // vm.form = {}
        vm.formData = {}

        vm.submit = function() {
            vm.loading = true
            $http({
                method: 'POST',
                url: 'http://localhost:8000/course/courses/',
                data: vm.formData,
            }).then(function successCallback(response) {
                vm.loading = false;
                vm.formSubmitted = true;
                vm.formSubmitSuccess = true;
            }, function errorCallback(response) {
                vm.loading = false;
                vm.formSubmitted = false;
                vm.formSubmitSuccess = false;
            });
        }
        
        vm.resetForm = function() {
            vm.formData = {};
        }
    }
})();
  