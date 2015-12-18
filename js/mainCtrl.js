angular.module('quoteBook').controller('mainCtrl', function($scope, mainService) {
	$scope.zero = true;
	$scope.one = false;
	$scope.two = false;

	$scope.getData = function() {
		$scope.quotes = mainService.getData();
	}

	$scope.addData = function(newQuoteText, newQuoteAuthor) {
		$scope.quotes = mainService.addData(newQuoteText, newQuoteAuthor);
	}

	$scope.removeData = function(text) {
		$scope.quotes = mainService.removeData(text);
	}

	$scope.filterTheQuotes = function(filter) {
		$scope.thingToFilter = filter;
	}

	$scope.toggleButtons = function(number) {
		if (number === 0) {
			$scope.zero = true;
			$scope.one = false;
			$scope.two = false;
		} else if (number === 1) {
			$scope.zero = false;
			$scope.one = true;
			$scope.two = false;
		} else if (number === 2) {
			$scope.zero = false;
			$scope.one = false;
			$scope.two = true;
		}
	}

	$scope.setData = function() {
		mainService.setData();
		alert('Saved');
	}

	$scope.removeDataFromStorage = function() {
		if(confirm('Are you sure?')) {
			mainService.removeDataFromStorage();
			alert('Quotes deleted');
		}
	}

	$scope.getData();	

})