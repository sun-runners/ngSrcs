'use strict';

angular.module('app')
	.controller('DemoCtrl', function ($scope, $rootScope, $timeout) {

		// Move Function Section
		$scope.movePrev = function(){
			$.fn.fullpage.moveSlideLeft();
		};

		$scope.moveNext = function(){
			$.fn.fullpage.moveSlideRight();
		};

		// Load Function Section
		var timeout_load;
		$scope.load = function(mode){
      mode.loading = true;
			timeout_load = $timeout(function(){
        mode.loading = false;
      }, 5000);
    };

		// Initialize Function Section
		$scope.initialize = function(){
			$scope.modes = [
				{value: 'rotating-plane'},
				{value: 'double-bounce'},
				{value: 'wave'},
				{value: 'wandering-cubes'},
				{value: 'spinner-pulse'},
				{value: 'chasing-dots'},
				{value: 'three-bounce'},
				{value: 'circle'},
				{value: 'cube-grid'},
				{value: 'fading-circle'},
				{value: 'folding-cube'},
				{value: 'Load', text: 'Loading'}
			];
			$scope.mode = $scope.modes[0];
		};
		$scope.initialize();

		// Watch Function Section
		$scope.$watch('mode', function(){
			$scope.loading = false;
		});

		var granimInstance = new Granim({
		   element: '#granim-canvas',
			 direction: 'radial',
		   name: 'granim',
		   opacity: [1, 1],
		   states : {
					"default-state": {
						gradients: [
							['#212121', '#424242'],
							['#616161', '#757575'],
							['#757575', '#616161'],
							['#424242', '#212121']
						]
					}
		   }
		});

});
