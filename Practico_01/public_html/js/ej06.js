var pesos;
var tipoCambio = 32.62;
var montoDolar

$("#btnCalcularDolares").click(montoDolares);
    function montoDolares(){
        pesos = Number($("#monto").val());
        montoDolar = pesos / tipoCambio;
        $("#pValorDolares").html(montoDolar);
    }

