angular.module("app").controller('uploadImageController', function($scope) {
    const vm = this
      vm.imgAvailable=false;
      vm.vidAvailable=false;
      vm.img = vm.vid = {};

    vm.changed = function(){
        console.log('clicked')
    }
        var el = document.getElementById('the-photo-file-field')
        angular.element(el).bind('change', function( evt ) {
          $scope.$apply(function() {
            vm['img'] = evt.target.files;
            vm.imgAvailable=true;

            var reader = new FileReader();

            reader.onload = function(event) {
              $scope.$apply(function() {
                vm.the_url = event.target.result
              });
            };

            reader.readAsDataURL(evt.target.files[0]);
          });
        });


    })
