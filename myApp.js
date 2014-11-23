angular.module('myApp', [])
	.controller('madlibsController', function($scope) {

	  $scope.init = function(gens) {
	  	$scope.gen_options = [
	  	{
	  		gen_descrip: 'Male', 
	  		icon_class: 'fa fa-male',
	  		he_she: 'he', 
	  		his_her: 'his', 
	  		him_her: 'him'
	  	}, 
	  	{
	  		gen_descrip: 'Female', 
	  		icon_class: 'fa fa-female',
	  		he_she: 'she', 
	  		his_her: 'her', 
	  		him_her: 'her'
	  	}];
	  	$scope.selected_gen_option = $scope.gen_options[0];
	  };

	});

