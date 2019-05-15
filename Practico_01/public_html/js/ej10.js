var valor1;
var porcentaje1;
var resultadoPo;
var resultadoPre;
var resultadoFinal;

$("#btnCalcularporcentaje").click(resultadoPorcentaje);
        function resultadoPorcentaje(){
            valor1 = Number ($("#val1").val());
            porcentaje1 = Number ($("#por1").val());
            resultadoPo = (valor1 * porcentaje1);
            resultadoPre = resultadoPo / 100;
            resultadoFinal = valor1 + resultadoPre
            $("#pResultado1").html(resultadoFinal);
            
        }