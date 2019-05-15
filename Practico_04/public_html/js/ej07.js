$("#btnMostrar").click(gradosObtenidos);
function gradosObtenidos(){
    var temp = Number($("#temp").val());
    var unidad = $("#slcUnidad").val();
    var obtenido = conversionFahrenheit(temp, unidad);
    mostrarMensaje(obtenido);
}