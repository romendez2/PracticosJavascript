var numero1;
var numero2;

$("#btnVer").click(verNumeros);
    function verNumeros(){
        numero1 = Number($("#num1").val());
        numero2 = Number($("#num2").val());
        if(numero1 < numero2){
            for(numero1; numero1 <= numero2; numero1++){
                $("#pVer").append(numero1 + "<br>");
            }
        }else if(numero2 < numero1){
            for(numero2; numero2 <= numero1; numero2++){
                $("#pVer").append(numero2 + "<br>");
            }
        }else 
            $("#pVer").html("Ingrese numeros diferentes");
        
    }

