var ingreso;
var calculo;

$("#btnCalcular").click(calcularIngreso);
    function calcularIngreso(){
        ingreso = Number ($("#valor2").val());
        if (ingreso < -20 || ingreso > 20){
            $("#pResultado").html("CUMPLE");
        }
        else $("#pResultado").html("NO CUMPLE");
       
        
        /* switch (calculo){
            case ingreso > -20:
            case ingreso < 20:
                
                $("#pResultado").html(calculo3);
                break;
        }*/
    }


