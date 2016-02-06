angular.module('app', [])
	.directive('mySum', [function(){
		return {
			restrict: 'E',
			template: 'Sum: {{firstNumber+secondNumber}}'
		};



	}]);
	