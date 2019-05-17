$("#btnInvertir").click(tomarDatos);
function tomarDatos(){
    
    var _txtCampo = $("#texto").val();
    var _devInvertida = invertirTexto(_txtCampo);
    $("#pVer").html(_devInvertida);
}