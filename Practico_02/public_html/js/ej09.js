var temperatura;
var dia;
var levantarse1;
var mensaje = "";

$("#btnDesicion").click(queHacer);
    function queHacer(){
        //levantarse1 = $("#pLevantarse").html("Levantarse");
        mensaje += "Levantarse.<br>";
        dia = $("#slcDia").val();
    switch (dia) {
        case "lu":
        case "ma":
        case "mi":
        case "ju":
        case "vi":
        case "sa":
            //$("#pTrabaja").html("Ir al Trabajo");
            mensaje +=  "Ir al Trabajo.<br>";
                break;   
        case "do":
            //$("#pTrabaja").html("Quedarse en casa, hoy no se trabaja");     
            
            mensaje += "Quedarse en casa, hoy no se trabaja.<br>";
                break;
    }
    temperatura = Number ($("#ingresoTempActual").val());
        if(temperatura <= 10){
            //$("#pRopa").html("Abrigarse Mucho");
            mensaje += ("Abrigarse Mucho.<br>");
        } else if (temperatura > 10 && temperatura < 20){
            //$("#pRopa").html("Abrigo Moderado");
            mensaje += ("Abrigo moderado.<br>");
        } else {
            //$("#pRopa").html("Ponerse ropa comoda");
            mensaje += ("Ponerse ropa comoda.<br>");
        
                }
            $("#pLevantarse").html(mensaje);    
}
        
        
    