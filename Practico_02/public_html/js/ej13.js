var ingreso1;
var ingreso2;
var verificador;

$("#btnVerificar").click(verMultiplo);
    function verMultiplo(){
        ingreso1 = Number ($("#valor1").val());
        ingreso2 = Number ($("#valor2").val());
         
        if(ingreso1 % ingreso2 === 0){
            $("#pVer").html("El valor 1 ES multiplo del valor 2");
        }else $("#pVer").html("El valor 1 NO multiplo del valor 2");
        
    }