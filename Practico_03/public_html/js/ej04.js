
$("#btnVer").click(mostrarNumeros);
    function mostrarNumeros(){
        for(var i = 20; i >= -30; i--){
            $("#pResultado").append(i + "<br>");
        }
    }