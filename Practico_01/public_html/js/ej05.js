var lado;
var area;

$("#btnCuadrado").click(guardar);
    function guardar(){
        lado = Number($("#lado").val());
        area = lado * lado;
        $("#pAreaCuadrado").html(area);
    }