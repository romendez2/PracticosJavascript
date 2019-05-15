var totalSueldos = 0;
var sueldo;
var cantidadEmpleados = 0;
//var sueldoMinimo = Number.POSITIVE_INFINITY;
//var sueldoMaximo = Number.NEGATIVE_INFINITY;
var sueldoMinimo;
var sueldoMaximo;

$("#btnMostrar").click(agregarSueldo);

function agregarSueldo() {
    cantidadEmpleados++;
    sueldo = Number($("#txtSueldo").val());
    totalSueldos += sueldo;
    if (cantidadEmpleados > 1) {
        if (sueldo < sueldoMinimo) {
            sueldoMinimo = sueldo;
        }
        
        if(sueldo> sueldoMaximo){
            sueldoMaximo = sueldo;
        }
        
    }else{
        sueldoMinimo = sueldo;
        sueldoMaximo = sueldo;
    }
   // $("#pResultado").html("Minimo: " + sueldoMinimo + "<br>");
    $("#pResultado").html("Total $" + totalSueldos + "<br>");
    $("#pResultado").append("Cantidad de empleados a cobrar este mes: " + cantidadEmpleados + "<br>");
    $("#pResultado").append("Sueldo mas bajo: " + sueldoMinimo);
}