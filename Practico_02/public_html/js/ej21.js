var ingreso = 0;
var costo = 0;
var primerPago = 0;
var cuotas = 0;

$("#btnComprar").click(calcularCuotas);
    function calcularCuotas(){
        ingreso = Number($("#ingresoComprador").val());
        costo = Number($("#precioCasa").val());
        if(ingreso < 20000){
            primerPago = costo * 0.15;
            cuotas = (costo - primerPago) / 84;
            $("#pResultado").html("El primer pago debera ser de " + primerPago + " y debera pagar 84 cuotas de " + cuotas + "pesos.");

        }else if(ingreso >= 20000){
            primerPago = costo * 0.30;
            cuotas = (costo - primerPago) / 12;
            $("#pResultado").html("El primer pago debera ser de " + primerPago + " y debera pagar 12 cuotas de " + cuotas + "pesos.");

        }

    }