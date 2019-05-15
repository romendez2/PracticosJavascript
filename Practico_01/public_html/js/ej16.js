var ganados;
var empatados;
var perdidos;
var puntosTotal;

$("#btnPuntos").click(calcularPuntos);
    function calcularPuntos(){
        ganados = Number ($("#txtParGan").val());
        empatados = Number ($("#txtParEmp").val());
        perdidos = Number ($("#txtParPer").val());
        puntosTotal = (ganados * 3) + (empatados * 1);
        
        $("#pPuntos").html(puntosTotal);
    }