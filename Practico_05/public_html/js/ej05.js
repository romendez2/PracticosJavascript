$("#btnConvertir").click(convertirTexto);
function convertirTexto(){
    var texto = $("#texto").val();

    var conversion = pasarMayuscula(texto);
    $("#pVer").html(conversion);
}