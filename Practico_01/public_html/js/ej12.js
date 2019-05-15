var masa;
var estatura;
var estaturaCuadrado;
var resultadoCalculadoIMC;

$("#btnCalcularIMC").click(resultadoDeIMC);
        function resultadoDeIMC(){
            masa = Number ($("#peso").val());
            estatura = Number ($("#altura").val());
            estaturaCuadrado = estatura * estatura;
            resultadoCalculadoIMC = masa / estaturaCuadrado;
            $("#pResultadoIMC").html(resultadoCalculadoIMC);
            
        }