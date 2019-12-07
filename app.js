// DEFINO EL MODULO APP 
var app 	= angular.module('app', []);
var TOKEN 	= "55cf5b78bfc74b25a7efd4ae29feb94d";
var API 	= "https://crudcrud.com/api/";


// CONTROLLER PERSONA
app.controller('BuscarPersonaCtrl', ['$scope','$http', function ($scope, $http) {

	$http.get( API + TOKEN + '/clientes', function (res) {
		console.log("res: ", res)
	}, function (err){
		console.log("error: ", err);
	})

	// TODO EN ANGULAR SON OBJETOS
	$scope.persona  	= {};
	$scope.resPersona 	= {};

	$scope.existPersona = false;

	$scope.obtenerPersona = function () {
		$scope.existPersona = true;
		console.log("persona ::", $scope.persona);

		$scope.resPersona 	   = angular.copy($scope.persona); // POR QUE SE VA A MODIFICAR MUCHAS VECES PERSONA
		$scope.resPersona.edad = 27;
		$scope.resPersona.localidad = "Cordon";
	}
}])