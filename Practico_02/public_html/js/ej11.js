var numero1;
var numero2;
var suma = 0;
var resta = 0;
var multiplicacion = 0;
var division = 0;
var operacion;

$("#btnMostrar").click(hacerCalculos);
    function hacerCalculos(){
        numero1 = Number($("#valor1").val());
        numero2 = Number($("#valor2").val());
        operacion = $("#slcOperacion").val();
        suma = numero1 + numero2;
        resta = numero1 - numero2;
        multiplicacion = numero1 * numero2;
        division = numero1 / numero2;
        
        switch(operacion){
            case "S":
                $("#pResultado").html("La suma es: " + suma);
                break
            case "R":
                $("#pResultado").html("La resta es: " + resta);
                break
            case "M": 
                $("#pResultado").html("La multiplicacion es: " + multiplicacion);
                break
            case "D": 
                $("#pResultado").html("La division es: " + division);
                break
            default:
                $("#pResultado").html("No se ingreso nada");
        }
        
        
        
    }