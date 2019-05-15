var numero;
var totalAcumulado = 0;
var cantidadClicks = 0;
 
 $("#btnAcumular").click(acumularNumero);
    function acumularNumero() {
        cantidadClicks++;
 
        numero = Number($("#Num1").val());
        $("#Num1").val("");

        if (numero < 0) {
        numero *= -1;
        }

        totalAcumulado += numero;
        $("#pResultado").append(totalAcumulado + "<br>");
 
        if (cantidadClicks === 6) {
        $("#Num1").attr("disabled", "disabled");
        $("#btnAcumular").attr("disabled", "disabled");
    }
 }