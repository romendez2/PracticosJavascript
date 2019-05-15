var ancho;
var largo;

$("#btnVerRectangulo").click(VerRectangulo);
function VerRectangulo(){
    ancho = Number($("#anchoL").val());
    largo = Number($("#largoL").val());
    for (i = 1; i <= ancho; i++) {
        for(j = 1; j <= largo; j++){
            $("#pVer").append("+");
        }
            $("#pVer").append("<br>");

    }
}
        