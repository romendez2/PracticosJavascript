var numero1;
var numero2;
var calculo;

$("#btnCalcular").click(obtenerResultado);     
        function obtenerResultado(){
            numero1 = Number ($("#numberValor1").val());
            numero2 = Number ($("#numberValor2").val());
            calculo = numero1 + numero2;
            $("#pResultado").html(calculo);
            
        }

