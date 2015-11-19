angular.module("layarApp", [])
.controller("MainController", function($scope){
	$scope.definePage = false;
	$scope.layarPage = 1;
	$scope.mode = "image_mode";
	$scope.layarImage1 = start();

//第一レイヤーここから ------------------------------------------- >>
	$scope.wordfirstClick = function(){
		$scope.layarPage = 1;
		$scope.mode = "word_mode";
		$scope.layarImage1 = Enumerable.From(main_word)
								.Where(function(x){
									return x;
								})
								.ToArray();
	};

	$scope.structurefirstClick = function(){
		$scope.layarPage = 1;
		$scope.mode = "structure_mode";
		$scope.layarImage1 = Enumerable.From(main_structure)
								.Where(function(x){
									return x;
								})
								.ToArray();
	};

	$scope.backImg1 = function(){
		$scope.definePage = false;
		$scope.layarPage = 1;
		$scope.mode = "image_mode";
		$scope.layarImage1 = start();
	};

	$scope.firstClick = function(d){
		$scope.layarPage = 2;
		$scope.layarType2 = d.type;
		$scope.clusterType = d.type;
		if($scope.mode == "image_mode"){
			$scope.imageLayar1();
		}else if($scope.mode == "word_mode"){
			$scope.wordsecondClick();
		}else if($scope.mode == "define_mode"){
			$scope.layarPage = 1;
		}else if($scope.mode == "structure_mode"){
			$scope.structuresecondClick();
		}
	};

	$scope.imageLayar1 = function(){
		$scope.layarPage = 2;
		$scope.mode = "image_mode";
		$scope.layarImage2 = Enumerable.From(av_img)
								.Where(function(x){
									return x.type == $scope.layarType2;
								})
								.ToArray();
		console.log($scope.layarImage2);
	};

	$scope.defineClickA = function(){
			$scope.definePage = true;
			$scope.mode = "define_mode";
			$scope.layarImage1 = Enumerable.From(av_define)
									.Where(function(x){
										return x.type == "A";
									})
									.ToArray();
	};

	$scope.defineClickB = function(){
		$scope.layarImage1 = Enumerable.From(av_define)
									.Where(function(x){
										return x.type == "B";
									})
									.ToArray();
	};

	$scope.defineClickC = function(){
		$scope.layarImage1 = Enumerable.From(av_define)
									.Where(function(x){
										return x.type == "C";
									})
									.ToArray();
	};

	$scope.defineBack = function(){
		$scope.definePage = false;
		$scope.mode = "image_mode";
		$scope.layarImage1 = start();
	};

//第一レイヤーここまで ------------------------------------------- >>
//第二レイヤーここから ------------------------------------------- >>

	$scope.wordsecondClick = function(){
		$scope.layarPage = 2;
		$scope.mode = "word_mode";
		$scope.layarImage2 = Enumerable.From(av_word)
								.Where(function(x){
									return x.type == $scope.layarType2;
								})
								.ToArray();
	};

	$scope.structuresecondClick = function(){
		$scope.layarPage = 2;
		$scope.mode = "structure_mode";
		$scope.layarImage2 = Enumerable.From(av_structure)
								.Where(function(x){
									return x.type == $scope.layarType2;
								})
								.ToArray();
	};

	$scope.backImage2 = function(){
		$scope.mode = "image_mode";
		$scope.layarImage2 = Enumerable.From(av_img)
								.Where(function(x){
									return x.type == $scope.layarType2;
								})
								.ToArray();
	};

	$scope.secondClick = function(d){
		$scope.layarPage = 3;
		$scope.cluster = d.layar;
		$scope.autoTitle = makeTitle($scope.cluster);
		$scope.n = d.location;
		if($scope.mode == "image_mode"){
			$scope.imageLayar2();
		}else if($scope.mode == "word_mode"){
			$scope.wordthirdClick();
		}else if($scope.mode == "structure_mode"){
			$scope.structurethirdClick();
		}
	};

	$scope.imageLayar2 = function(){
		$scope.mode = "image_mode";
		$scope.layarImage3 = Enumerable.From(av_img)
								.Where(function(x){
									return x.location == $scope.n;
								})
								.ToArray();
	};

//第二レイヤーここまで ------------------------------------------- >>
//第三レイヤーここから ------------------------------------------- >>

	$scope.wordthirdClick = function(){
		$scope.mode = "word_mode";
		$scope.layarImage3 = Enumerable.From(av_word)
								.Where(function(x){
									return x.location == $scope.n;
								})
								.ToArray();
	};

	$scope.structurethirdClick = function(){
		$scope.mode = "structure_mode";
		$scope.layarImage3 = Enumerable.From(av_structure)
								.Where(function(x){
									return x.location == $scope.n;
								})
								.ToArray();
	};

	$scope.backImage3 = function(){
		$scope.mode = "image_mode";
		$scope.layarImage3 = Enumerable.From(av_img)
								.Where(function(x){
									return x.location == $scope.n;
								})
								.ToArray();
	};

	$scope.remakeTitle = function(){
		$scope.autoTitle = null;
		$scope.autoTitle = makeTitle($scope.cluster);
		console.log("うごいてる");
	};

	$scope.backtoLayar0 = function(){
		if($scope.mode == "image_mode"){
			$scope.backImg1();
		}else if($scope.mode == "word_mode"){
			$scope.wordfirstClick();
		}else if($scope.mode == "structure_mode"){
			$scope.structurefirstClick();
		}
	};

	$scope.backtoLayar1 = function(){
		if($scope.mode == "image_mode"){
			$scope.imageLayar1();
		}else if($scope.mode == "word_mode"){
			$scope.wordsecondClick();
		}else if($scope.mode == "structure_mode"){
			$scope.structuresecondClick();
		}
	};


});

function start(){
	var image_start = Enumerable.From(main_img)
						.Where(function(x){
							return x;
						})
						.ToArray();
	return image_start;
}