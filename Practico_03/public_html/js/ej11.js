var numero1;
var numero2;
var numero3;
var minimo;
var maximo;
var resultado;

$("#btnVer").click(verResultado);
    function verResultado(){
        numero1 = Number($("#num1").val());
        numero2 = Number($("#num2").val());
        numero3 = Number($("#num3").val());

        //multiplos del numero 3 que esten entre los dos primeros
        if(numero1 < numero2){
            minimo = numero1;
            maximo = numero2;
        }else{
            minimo = numero2;
            maximo = numero1;
        }
        for(i = minimo; i <= maximo; i++){
            if(numero3 % i === 0){
                $("#pVer").append(i + "<br>");
            }
        }
    }