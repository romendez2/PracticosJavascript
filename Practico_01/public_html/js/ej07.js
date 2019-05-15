var valory;
var valorx;
var resto;

$("#btnCalcularResto").click(restoTotal);
    function restoTotal(){
        valory = Number($("#valory1").val());
        valorx = Number($("#valorx1").val());
        resto = valory % valorx;
        $("#pValorResto").html(resto);
    }


