var contar = 0;
var vecesApretado;

$("#btnContador").click(contadorApretado);
        function contadorApretado(){
            contar += 3;
            vecesApretado = contar  
            
            $("#pContador").html(vecesApretado);
            
        }