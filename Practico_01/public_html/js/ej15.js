var ingreso1;
var valorAcumulado = 0;

$("#btnIngreso").click(contadorIngreso);
        function contadorIngreso(){
            ingreso1 = Number ($("#txtingreso").val());
            valorAcumulado += ingreso1;
            
           }
           
$("#btnValorFinal").click(calculoFinal);
        function calculoFinal(){
            
            $("#pValorFinal").html(valorAcumulado);
            
            
            
        }