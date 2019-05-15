var numero;

$("#btnCalcular").click(calcularN);
function calcularN(){
    numero = Number($("#num").val());
    if (numero > 2000) {
            
    do {numero /= 20;
        $("#pVer").append(numero + "<br>");
    } while (numero > 100);
    
} else 
{
    $("#pVer").html("Ingrese un numero mayor que 2000");
}
}