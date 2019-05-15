var valor;


$("#btnVer").click(verValor);
    function verValor(){
        valor = Number ($("#txtValor").val());
        if (valor > 10 & valor < 20){
            $("#pResultado").html("El numero es mayor que 10 y menor que 20");
            
        }else {$("#pResultado").html("El numero no es ni mayor que 10 ni menor que 20");
        }
        
    }