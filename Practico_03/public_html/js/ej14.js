var numero;
var digitos;

$("#btnDigitos").click(cantidadDigitos);
function cantidadDigitos(){
    numero = Number($("#num").val());
    digitos = 0;
    while(numero >= 1){
        numero /= 10;
        digitos++;

    }
    $("#pVer").html("El numero tiene " + digitos + " digitos");
}