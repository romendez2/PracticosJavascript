
$("#btnConvertir").click(convertirTexto);
function convertirTexto(){
    var texto = $("#texto").val();
    var texto2 = $("#texto2").val();

    var buscar = encontrarSubcadena(texto);
    if(texto2 < 0){
        $("#pVer").html("Es subcadena");
    }else $("#pVer").html("No es subcadena");


    $("#pVer").html(conversion);
}