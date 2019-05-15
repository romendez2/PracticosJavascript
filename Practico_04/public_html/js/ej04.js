$("#btnMostrar").click(calculo);
function calculo (){
var base = Number($("#base").val());
var altura = Number($("#altura").val());

    var areaCalculada = calcularArea(base, altura);
    mostrarMensaje(areaCalculada);

}