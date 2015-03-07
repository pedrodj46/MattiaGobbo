angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope,$http) {
	$http.get("http://mattiagobbo.altervista.org/app/about.php")
	.success(function(response){$scope.portfolios = response;});
})

.controller('AboutCtrl', function($scope,$http) {
	$http.get("http://mattiagobbo.altervista.org/app/about.php")
	.success(function(response){$scope.abouts = response;});
})

.controller('ContactCtrl', function($scope,$http) {
	$http.get("http://mattiagobbo.altervista.org/app/contact.php")
	.success(function(response){$scope.contacts = response;});
})

.controller('PortfoliosCtrl', function($scope,$http) {
	$http.get("http://mattiagobbo.altervista.org/app/lista-portfolio.php")
	.success(function(response){$scope.portfolios = response;});
})

.controller('PortfolioCtrl', function($scope, $http, $stateParams) {
	$http.get("http://mattiagobbo.altervista.org/app/lista-portfolio.php?id="+$stateParams.portfolioId)
	.success(function(response){$scope.portfolios = response;});
});