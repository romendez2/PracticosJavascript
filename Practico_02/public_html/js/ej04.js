var ingresoN;

$("#btnMostrar").click(mostrarResultado);
        function mostrarResultado(){
            ingresoN = Number ($("#txtIngreso").val());    
            if (ingresoN < 0){
                ingresoN = ingresoN * (-1);
                    $("#pResultado").html(ingresoN);
            }
                else {
                    $("#pResultado").html(ingresoN);
                }
            //$("#pResultado").html(ingresoN);
        }

