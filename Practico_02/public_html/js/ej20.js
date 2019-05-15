var azucar;
var harina;
var aceite;
var agua;
var cantidad;

$("#btnReceta").click(verReceta);
    function verReceta(){
        azucar = Number ($("#ing1").val());
        harina = Number ($("#ing2").val());
        aceite = Number ($("#ing3").val());
        agua = Number ($("#ing4").val());
        harina /= 100;
        
        if(azucar <= harina && azucar <= aceite && azucar <= agua){
            cantidad = azucar;
            }
            if(harina <= azucar && harina <= aceite && harina <= agua){
                cantidad = harina;
                }
                if(aceite <= harina && aceite <= azucar && aceite <= agua){
                    cantidad = aceite;
                    }
                    if(agua <= harina && agua <= aceite && agua <= azucar){
                        cantidad = agua
                        }
    $("#pResultado").html("Se pueden hacer " + cantidad + " recetas de galletas");
    
}