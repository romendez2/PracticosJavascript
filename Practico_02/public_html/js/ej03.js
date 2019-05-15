var ingreso1;

$("#btnMostrar").click(mostrarResultado);
        function mostrarResultado(){
            ingreso1 = Number ($("#txtIngreso").val());    
            if (ingreso1 > 20){
                alert("Es Mayor que 20");
            }
                else {
                    alert("Es Menor o igual que 20");
                }
            
        }

