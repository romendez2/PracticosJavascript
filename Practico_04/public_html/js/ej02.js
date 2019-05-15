$("#btnMostrar").click(verResultado);
function verResultado (){
var edad1 = Number($("#_num1").val());
var tope1 = Number($("#_num2").val());


var resultado = esMayor(edad1, tope1);

if (resultado === false) {
    mostrarMensaje("No es mayor");
}else{
    mostrarMensaje("Es mayor");
}


}