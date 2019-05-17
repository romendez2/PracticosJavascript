$("#btnContar").click(contarLetra);
function contarLetra(){
    var texto = $("#texto").val();
    var letra = $("#letra").val();

    var veces = contarVeces(texto, letra);
    $("#pVer").html(veces);
}