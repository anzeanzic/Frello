angular.module('frello', []);

angular.module('frello').controller('FrelloController', function($scope) {
	$scope.tasks = [];
	$scope.todoListVisible = true;
	$scope.addTask = function(task, isCompleted) {
		if (isCompleted === undefined) {
			isCompleted = false;
		}
		// check if task is not empty
		if (task != undefined && !CheckIfTaskAlreadyExists(task, $scope.tasks)) {
			$scope.tasks.push({ name: task, isCompleted: isCompleted });
		}
	}
	$scope.removeTask = function(task) {
		var task_index = $scope.tasks.indexOf(task);
		if (task_index > -1) {
			$scope.tasks.splice(task_index, 1);
		}
	}
	$scope.toogleTaskList = function() {
		$scope.todoListVisible = $scope.todoListVisible ? false : true;
	}
	$scope.changeTaskState = function(task) {
		task.isCompleted = task.isCompleted ? false : true;
	}
});

var CheckIfTaskAlreadyExists = function(task, tasksArray) {
	var alreadyExists = false;
	if (tasksArray.length > 0) {
		for (var i = 0; i < tasksArray.length; i++) {
			if (task === tasksArray[i].name) {
				alreadyExists = true;
				break;
			}
		}
	}

	return alreadyExists;
};