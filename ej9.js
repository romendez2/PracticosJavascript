var dias=0,horas=0,horasTrabajo=0,asistente=0,precioMateriales=0;


$("#btnMostrar").click(Datos);

function Datos() {
var totalHoras=0,ivamaterial=0;
	dias=Number($("#txtDias_trabajo").val());
    horasTrabajo=Number($("#txtHoras_trabajo").val());
    asistente=Number($("#slcAsistente").val());
    precioMateriales=Number($("#txtMateriales").val());

totalHoras=CalcTotalHoras(dias,horasTrabajo,asistente);
$("#pResultado").html(totalHoras);

ivamaterial=CalculoMateriales(precioMateriales);
$("#pResultado2").html(ivamaterial);
}

function CalculoMateriales(precioMateriales) {
	var costoMaterialiva=0;

     costoMaterialiva=(precioMateriales *10) /100;
     precioMateriales+= costoMaterialiva;

	return "El precio total de los materiales es de $"+precioMateriales;
}




/*Calcula las horas si el asistente va a trabajar o no */
function CalcTotalHoras(dias,horasTrabajo,asistente) {
var totalHoras1=0,jornadaAsistente=150,jornadaElectrisista=200,jornadaDineroTotal="El costo de la jornada  total es :";

if (asistente===0) {

	totalHoras1=dias*horasTrabajo;
	jornadaDineroTotal= jornadaElectrisista*totalHoras1;

}else{

totalHoras1=dias*horasTrabajo;
jornadaDineroTotal = (jornadaElectrisista+jornadaAsistente) *totalHoras1;

}

return "La cantidad de horas  es de  : "+totalHoras1+"  horas por  "+dias+"  dias de trabajo"+"<br>"+" La la cantidad de dinero en jornadas es de  $"+jornadaDineroTotal;	
}
/*sdsdg*/