var nombre;
var numb;
var plus;

$("#btnVer").click(calcularViajes);
    function calcularViajes(){
        nombre = $("#nombreCliente").val();
        numb = Number($("#millasAcumuladas").val());
        plus = $("#slcPlus").val();

        switch(plus){
            case "S":
                numb = numb * 2;
                if(numb >= 30000) {
                    $("#pResultado").html("Estimado " + nombre + ", siendo parte del plan Plus y teniendo " + numb + " millas usted podra viajar gratis a Europa");

                }else if(numb > 15000 && numb < 30000){
                    $("#pResultado").html("Estimado " + nombre + ", siendo parte del plan Plus y teniendo " + numb + " millas usted podra viajar gratis a America del Norte");

                }else if(numb > 7500 && numb < 15000){
                $("#pResultado").html("Estimado " + nombre + ", siendo parte del plan Plus y teniendo " + numb + " millas usted podra viajar gratis a America del Sur");
                }else  {
                    $("#pResultado").html("Estimado cliente Plus " + nombre + ", no dispone de viajes gratis");
            }
            break;
            case "N":
            if(numb >= 30000) {
                $("#pResultado").html("Estimado " + nombre + ", siendo cliente comun y teniendo " + numb + " millas usted podra viajar gratis a Europa");

            }else if(numb > 15000 && numb < 30000){
                $("#pResultado").html("Estimado " + nombre + ", siendo cliente comun y teniendo y teniendo " + numb + " millas usted podra viajar gratis a America del Norte");

            }else if(numb > 7500 && numb < 15000){
            $("#pResultado").html("Estimado " + nombre + ", siendo cliente comun y teniendo " + numb +" millas usted podra viajar gratis a America del Sur");
            }else  {
                $("#pResultado").html("Estimado " + nombre + ", no dispone de viajes gratis");
        }break;
        default:
        $("#pResultado").html("Estimado " + nombre + ", no dispone de viajes gratis");
    }

    }