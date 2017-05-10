//Tenemos dos arreglos
var l1 = [1,2,3];
var l2 = [2,3,4];

//Solucion de ejercicio de forma imperativa
function intersection(l1,l2){
	var l3 = [];
	for(var i=0; i<l1.length; i++){
		for(var j=0; j<l2.length; j++){
			if(l1[i]==l2[j]){
				l3.push(l1[i]);
			}
		}
	}
	return l3;
}

//Solucion de manera declarativa
function intersectionSet2(l1,l2){
	return l1.filter(function(n){
		return l2.indexOf(n) !== -1
	});
}

//Segundo ejercicio
var productos = [
	{
		nombre: "pijama",
		tipo: "ropa"
	},
	{
		nombre: "nevera",
		tipo: "electrodomestico"
	},
	{
		nombre: "asus",
		tipo: "computador"
	},
	{
		nombre: "macbook",
		tipo: "computador"
	},
	{
		nombre: "toshiba",
		tipo: "computador"
	}
];