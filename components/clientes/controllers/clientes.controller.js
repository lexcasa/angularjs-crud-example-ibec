app.controller('ClienteCtrl', ['$scope','$http', function ($scope, $http) {
	$scope.title = "Clientes";
	$scope.isNew = false;
	$scope.item  = {};


	$scope.setIsNew 	= function (bool) {
		$scope.isNew 	= bool;
	}


	$scope.clientes = [];

	console.log("clientes: ", $scope.clientes, $http);

	// LISTADO DE TODOS
	$http.get( API + TOKEN + '/clientes').then( function (res){
		$scope.clientes = res.data;
	}, function (err){
		console.log("err: ", err);
	})


	$scope.obtenerClientes = function (){
		$http.get( API + TOKEN + '/clientes').then( function (res){
			$scope.clientes = res.data;
		}, function (err){
			console.log("err: ", err);
		})
	}

	$scope.obtenerCliente 	= function (id) {
		console.log("id: ", id);

		$http.get( API + TOKEN + '/clientes/' + id).then( function (res){
			$scope.item = res.data;
		}, function (err){
			console.log("err: ", err);
		})
	}

	$scope.save 	= function () {
		console.log("cliente:", $scope.item);
		var cliente = angular.copy($scope.item);


		if(!cliente._id){
			// POST API
			$http.post( API + TOKEN + '/clientes', cliente).then( function (res) {
				console.log("cliente new: ", res);

			},  function (err){
				console.log("error: ", err)
			})
		} else {
			var cliEdit = angular.copy(cliente);
			delete cliEdit._id;

			$http.put( API + TOKEN + '/clientes/'+ cliente._id, cliEdit).then( function (res) {
				console.log("cliente new: ", res);

			},  function (err){
				console.log("error: ", err)
			})
		}
	}
}])