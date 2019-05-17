$("#btnContar").click(contarLetra);
function contarLetra(){
    var texto = $("#texto").val();

    var veces = contarVocales(texto);
    $("#pVer").html(veces);
}