$("#btnVer").click(tomarDatos);
 
 function tomarDatos(){
 var num1 = Number($("#num1").val());
 var num2 = Number($("#num2").val());
 
 var cantidadObtenida = obtenerCantidadParesEntre(num1, num2);
 mostrarMensaje(cantidadObtenida);
 }
 
 