var contar = 0;
var vecesApretado;

$("#btnContador").click(contadorApretado);
        function contadorApretado(){
            contar += 1;
            vecesApretado = contar  
            
            $("#pContador").html(vecesApretado);
            
        }