$("#btnMostrar").click(tomarDatos);
 
 function tomarDatos(){
 var num1 = Number($("#_num1").val());
 var num2 = Number($("#_num2").val());
 
 var cantidadObtenida = obtenerCantidadParesEntre(num1, num2);
 mostrarMensaje(cantidadObtenida);
 }
 
 