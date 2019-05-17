$("#btnMostrar").click(saberPresupuesto);
function saberPresupuesto(){
    var dias = Number($("#cantidadDias").val());
    var horas = Number($("#cantidadHoras").val());
    var costo = Number($("#costoMateriales").val());

    if(numeroPositivo(dias, horas)){
    var asistente = $("#slcAsistente").val();
    var totalSalario = calcTotalHoras(dias,horas,asistente); 
    var totalGastos = valorTotalGastos(costo);
    var presupuestoTotal = totalSalario + totalGastos;
    mostrarMensaje(presupuestoTotal);
    }else {mostrarMensaje("Ingrese un numero positivo");
    }
}