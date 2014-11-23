angular.module('myApp', [])
	.controller('madlibsController', function($scope) {

		//set ng-init to pass selected gender options and pronouns for mad lib story
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
	  	// set the chosen gender to either of the first values 
	  	$scope.selected_gen_option = $scope.gen_options[0];
	  };

	  // show form; set nghide to false
	  $scope.formInputs = false;
	  // hide generated mad lib story; set nghide to true 
	  $scope.showLibs = true;

	  $scope.submit = function() {
	  	var validForm 			= $scope.madlibForm.$valid;
	  	var validName 			= $scope.madlibForm.your_name.$dirty;
	  	var validTask 			= $scope.madlibForm.dirty_task.$dirty;
	  	var validObnoxCeleb = $scope.madlibForm.obnox_celeb.$dirty;
	  	var validJob				= $scope.madlibForm.job_title.$dirty;
	  	var validCeleb			= $scope.madlibForm.celebrity.$dirty;
	  	var validHugeNum		= $scope.madlibForm.huge_number.$dirty;
	  	var validTask				= $scope.madlibForm.tedious_task.$dirty;
	  	var validSkill			= $scope.madlibForm.useless_skill.$dirty;
	  	var validAdjective	= $scope.madlibForm.adjective.$dirty;

	  // if form fields are filled in and pass HTML5 validation, they are set to true
	  if(validForm || validName || validTask || validObnoxCeleb || validJob || 
	  	 validJob || validCeleb || validHugeNum || validTask ||
	  	 validSkill || validAdjective) {
	  		//hide form when fields are valid; set nghide to true
	  		$scope.formInputs = true;
	  		//show mad lib story; set nghide to false
	  		$scope.showLibs = false;
	  	}
	  };

		// on click hide mad lib story, show inputs with reset fields
		$scope.startOver = function() {
			// show form fields; set nghide to false
			$scope.formInputs = false;
			// hide mad lib story; set nghide to true
			$scope.showLibs = true;	
			// clear gender radio buttons
			$scope.selected_gen_option = false;
		};

	});

