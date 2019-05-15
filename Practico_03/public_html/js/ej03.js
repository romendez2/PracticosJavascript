$("#btnComenzar").click(mostrarNumeros);
    function mostrarNumeros(){
        for(var i =40; i>= 10;i--){
            $("#pResultado").append(i + "<br>");
        }
        
        
    }