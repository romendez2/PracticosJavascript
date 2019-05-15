$("#btnMostrar").click(saberPresupuesto);
function saberPrrsupuesto(){
    var dias = Number($("#cantidadDias").val());
    var horas = Number($("#cantidadHoras").val());
    var costo = Number($("#costoMateriales").val());
    var asistente = $("#slscAsistente").val();
    var totalSalario = calcTotalHoras(dias,horas,asistente) 
    var totalGastos = valorTotalGastos(costo);
    var presupuestoTotal = totalSalario + totalGastos;
    mostrarMensaje(presupuestoTotal);
}