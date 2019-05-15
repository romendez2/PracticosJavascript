$("#btnMostrar").click(mostrarGrados);
function mostrarGrados(){
    var gradosC = Number($("#temp").val());
    var calcularGrados = cambioGrados(gradosC);
    mostrarMensaje(calcularGrados);
}