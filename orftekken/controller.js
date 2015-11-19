angular.module("Tekkenapp",[])
.controller("ViewController", function($scope, $location){

	$scope.mode = "start";
	$scope.start = function(){
		$scope.mode = "battle";
		$scope.numb = 0;
		var gifdata = Enumerable.From(data)
						.Where(function(x){
							return x;
						})
						.ToArray();
		$scope.data = gifdata[$scope.numb];
		console.log($scope.data);
		$scope.answer_list = [];
		$scope.select_list = [];
	};

	$scope.deside = function(){
		var gifdata = Enumerable.From(data)
						.Where(function(x){
							return x;
						})
						.ToArray();
		var radioList = document.getElementsByName("player");
		for(var i=0; i<radioList.length; i++){
			if(radioList[i].checked){
				selected = radioList[i]["value"];
			}
		}
		answer_obj = {};
		answer_obj["selected"] = selected;
		$scope.select_list.push(answer_obj);
		if(selected == $scope.data["level"]){
			answer_obj["number"] = $scope.numb+1;
			answer_obj["answer"] = "正解";
			answer_obj["true"] = $scope.data["level"]
			$scope.answer_list.push(answer_obj);
		}else{
			answer_obj["number"] = $scope.numb+1;
			answer_obj["answer"] = "不正解";
			answer_obj["true"] = $scope.data["level"]
			$scope.answer_list.push(answer_obj);
		}
		console.log($scope.answer_list);

		if($scope.numb < 8){
			$scope.numb += 1;
		}else{
			$scope.mode = "result";
			true_answer = 0;
			for(j=0; j<$scope.answer_list.length; j++){
				if($scope.answer_list[j]["answer"] == "正解"){
					true_answer += 1;
				}

				if(true_answer < 4){
					$scope.level = "初級者";
				}else if(3 < true_answer && true_answer < 7){
					$scope.level = "中級者";
				}else if(6 < true_answer){
					$scope.level = "上級者";
				}
				console.log(true_answer);
				console.log($scope.level);
			}

			if($scope.level == "初級者"){
				$scope.resultImg = "result_img/biginner.jpg";
			}else if($scope.level == "中級者"){
				$scope.resultImg = "result_img/middle.jpg";
			}else{
				$scope.resultImg = "result_img/pro.jpg";
			}
		}
		console.log($scope.level);
		$scope.data = gifdata[$scope.numb];
	};

	$scope.back = function(){
		location.reload();
	};

});