$("#btnConvertir").click(convertirTexto);
function convertirTexto(){
    var texto = $("#texto").val();

    var conversion = pasarMinuscula(texto);
    $("#pVer").html(conversion);
}