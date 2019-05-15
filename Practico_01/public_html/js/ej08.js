var primero1;
var segundo2;
var tercero3;
var cuenta;

$("#btnCalcularRestoN").click(calcula);
    function calcula(){
        primero1 = Number($("#numero1").val());
        segundo2 = Number($("#numero2").val());
        tercero3 = Number($("#numero3").val());
        cuenta = primero1 + segundo2 - tercero3;
        $("#pCuenta").html(cuenta);
    }