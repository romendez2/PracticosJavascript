var valor;
var multiplo1;

$("#btnVermultiplo").click(verMultiplo);
        function verMultiplo(){
            valor = Number ($("#valorM").val());
        if(valor % 3 === 0 & valor % 7 ===0){
            $("#pResultado").html("Es multiplo de 3 y de 7 simultaneamente");
        } else {$("#pResultado").html("No multiplo de 3");
       
        }
        }
        



























            /*  switch (valor) {
        case (valor % 3) === 0:
        case (valor % 7) === 0 :
            $("#pResultado").html("Si es Multiplo de 3 y de 7");
            break;
        case (valor % 3) != 0:
        case (valor % 7) != 0:
            $("#pResultado").html("No es Multiplo");
            break;
        
    }*/
        