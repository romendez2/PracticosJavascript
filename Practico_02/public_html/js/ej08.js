var valor;

$("#btnCalcular").click(calcularIngreso);
    function calcularIngreso(){
        valor = Number ($("#num").val());
        if (valor > 30){
            $("#pResultado").html("Es mayor que treinta");
        }
        else if (valor < 10){
            $("#pResultado").html("Es menor que diez");
        }
        else 
            $("#pResultado").html("Entre diez y treinta");
        
        /* switch (calculo){
            case ingreso > -20:
            case ingreso < 20:
                
                $("#pResultado").html(calculo3);
                break;
        }*/
    }


