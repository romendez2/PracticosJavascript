var ingreso;

$("#btnMostrar").click(mostrarResultado);
        function mostrarResultado(){
            alert("Ingreso un valor");
            ingreso = Number ($("#txtIngreso").val());    
            if (ingreso > 10){
                alert("El Valor es Mayor a 10");
            }
                else {
                    alert("El Valor es Menor a 10");
                }
            
        }

