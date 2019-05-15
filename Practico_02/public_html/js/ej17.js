var a;
var resultado;

$("#btnVer").click(verificarCondicion);
    function verificarCondicion(){
        a = Number ($("#val").val());
        
        if(a < 0 || a > 10){
            $("#pResultado").html("A esta fuera de rango");
        }else
            $("#pResultado").html("A esta dentro de rango");
    }