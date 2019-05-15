var dato1;
var dato2;
var suma;
var multiplicacion;

$("#btnSumaMultiplica").click(mostrarCalculos);
        function mostrarCalculos(){
            dato1 = Number ($("#dato1").val());
            dato2 = Number ($("#dato2").val());
            suma = dato1 + dato2;
            multiplicacion = dato1 * dato2;
            $("#pPrimerResultado").html("Resultado de suma: " + suma);
            $("#pSegundoResultado").html("Resultado de multiplicacion: " + multiplicacion);
            
        }