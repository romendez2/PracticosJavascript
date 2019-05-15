$("#btnMostrar").click(calcularAreaR);
function calcularAreaR(){
    var base = Number($("#base").val());
    var altura = Number($("#altura").val());
    var resultado = areaRectangulo(base, altura);
    mostrarMensaje(resultado);
}