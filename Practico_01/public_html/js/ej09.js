var n1;
var n2;
var n3;
var resultado;

$("#btnNumerosnuevos").click(numerosCalculados);
        function numerosCalculados(){
            n1 = Number ($("#num1").val());
            n2 = Number ($("#num2").val());
            n3 = Number ($("#num3").val());
            resultado = ((n1*n1) - (n2+n3));
            $("#pResultado1").html(resultado);
            
        }