var valor1;

$("#btnMostrar").click(mostrarValordeNumero);
function mostrarValordeNumero(){
    valor1 = Number($("#txtingreso").val());
    if(valor1 < 0){
        $("#pResultado").html('Es Negativo');
    }
     else {
        $("#pResultado").html('Es Positivo');
    }
}    