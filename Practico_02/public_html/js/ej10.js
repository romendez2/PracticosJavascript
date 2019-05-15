var numero1;
var numero2;
var resultadoPosible;

$("#btnVer").click(verResultado);
    function verResultado (){
        numero1 = Number ($("#Numero1").val());
        numero2 = Number ($("#Numero2").val());
        
        if(numero1 > numero2){
            resultadoPosible = numero1 - numero2;
           
        }else {
            resultadoPosible = numero2 - numero1;
            
        }
            $("#pResta").append(resultadoPosible + "<br>");
        
    }
    