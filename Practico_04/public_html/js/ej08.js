$("#btnMostrar").click(potencia);
function potencia(){
    var baseN = Number($("#base").val());
    var exponenteN = Number($("#exponente").val());
    var resultado = calcularPotencial(baseN, exponenteN);
    mostrarMensaje(resultado);
}
