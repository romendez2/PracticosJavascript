var numero;

$("#btnCalcular").click(verNumero);
function verNumero(){

    numero = Number($("#num1").val());

    for(var i = 31; i < 200; i++){
        if(i % numero === 0 && i % 2 === 0){
            $("#pVer").append(i + "<br>");
        }
    }
}