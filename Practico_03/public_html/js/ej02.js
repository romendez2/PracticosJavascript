
$("#btnComenzar").click(mostrarNumeros);
    function mostrarNumeros(){
        for(var i =-100; i<= 10;i++){
            $("#pResultado").append(i + "<br>");
        }
        
        
    }