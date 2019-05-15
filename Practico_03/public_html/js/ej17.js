var dividendo;
var divisor;
var resultado = 0;
var resto;


$("#btnCalcular").click(obtenerDivision);
function obtenerDivision(){
    dividendo = Number($("#num1").val());
    divisor = Number($("#num2").val());

    while(divisor <= dividendo){
        resultado++;
        dividendo -= divisor;
        resto = dividendo;
    }
    
    $("#pVer").html("El resultado es " + resultado);
    $("#pVer2").html("El resto es " + resto);
}