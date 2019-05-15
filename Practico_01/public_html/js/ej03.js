var valor1
var valor2
var valor3
var tercercalculo

$("#btnCalculo3").click(obtenerCalculo);
        function obtenerCalculo(){
            valor1 = Number ($("#primerValor").val());
            valor2 = Number ($("#segundoValor").val());
            valor3 = Number ($("#tercerValor").val());
            tercercalculo = valor1 + valor2 + valor3;
            $("#ptercerResultado").html(tercercalculo);
        }


