var numero;


$("#btnComenzar").click(mostrarNumeros);
    function mostrarNumeros(){
        for(var i =0; i<= 1000;i++){
            $("#pResultado").append(i + "<br>");
        }
        
        
    }