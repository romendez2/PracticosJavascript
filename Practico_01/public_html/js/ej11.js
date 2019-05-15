var subTotal;
 var total;
 var IVA = 22;
 
 $("#btnCalcular").click(calcularImporteFinal);
 
 function calcularImporteFinal(){
 subTotal = Number($("#txtSubTotal").val());
 total = subTotal * (1+IVA/100);
 $("#pResultado").html(total);
 }