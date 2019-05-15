var numeroIngresado;
var factorial = 1;


$("#btnVer").click(calcularFactorial);
    function calcularFactorial(){
        numeroIngresado = Number($("#num1").val());
        for(var i = numeroIngresado; i > 0; i--){
          factorial*= i;
          
        }$("#pResultado").html(factorial);
}