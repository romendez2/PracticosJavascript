var numero1;
var numero2;
var resultado;

$("#btnCalcular").click(encontrarMultiplo);
function encontrarMultiplo(){

    numero1 = Number($("#num1").val());
    numero2 = Number($("#num2").val());

    for(var i = numero1; i <= numero2; i++){
        
        if(i % 4 === 0 && i % 6 === 0){
            resultado = i;
            $("#pVer").html(resultado + "<br>");
            break;
        }
    }
    

}