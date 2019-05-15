var nombre;
var apellido;
var apellidoNOmbre;

$("#btnFormatear").click(darFormato);

function darFormato(){
       nombre = $("#txtNombre").val();
       apellido = $("#txtApellido").val();
       apellidoNombre = apellido + "," +nombre;
       $("#pResultado").html(apellidoNombre);
}