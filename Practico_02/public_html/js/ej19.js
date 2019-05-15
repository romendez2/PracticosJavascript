var clicksIngresos = 0;
var numero;
var cond1 = 0;
var cond2 = 0;
var cond3 = 0;


$("#btnCalcular").click(ingresoValor);
    function ingresoValor() {
        clicksIngresos++;
        numero = Number($("#num1").val());
        $("#num1").val('');
        if(numero % 5 === 0){
            cond1++;
        }
        if(numero > 20){
            cond2++;
        }
        if(numero % 5 === 0 && numero > 20){
            cond3++;
        }
        if(clicksIngresos === 5){
            $("#num1").attr("disabled", "disabled");
            $("#btnCalcular").attr("disabled", "disabled");
            
            $("#pResultado").html(cond1 + " numeros son multiplos de 5");
            $("#pResultado2").html(cond2 + " numeros son mayores que 20");
            $("#pResultado3").html(cond3 + " numeros cumplen ambas condiciones");
        }
    }