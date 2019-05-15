var pagoInicial = 0;
var pagoFinal = 0;
var tarjeta;


$("#btnPago").click(verPago);
    function verPago(){
        pagoInicial = $("#pago").val();
        tarjeta = $("#slctarjeta").val();

        switch(tarjeta){
            case "S":
            if(pagoInicial < 10000){
            pagoFinal = pagoInicial * 0.96;
            $("#pResultado").html("Pago de $" + pagoInicial + " con tarjeta, costo final: $ " + pagoFinal);
            }else {
            $("#pResultado").html("Pago de $" + pagoInicial + " con tarjeta, costo final: $ " + pagoFinal);
            $("#pResultado").html("Pago de $" + pagoInicial + " con tarjeta, costo final: $ " + pagoInicial);
            }
            break;

            case "N":
            $("#pResultado").html("Pago de $" + pagoInicial + " sin tarjeta, costo final: $ " + pagoInicial);
           
        }

    }