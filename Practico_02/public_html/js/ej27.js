var numeroIngresado;
var cantidadIntentos = 0;
var distancia;

$("#btnComenzar").click(comenzarJuego);
$("#btnAdivinar").click(verificarNumero);

function comenzarJuego(){
    //numeroAdivinar = Number($("#txtNumeroAdivinar").val());
    $("#btnComenzar").attr("disabled", "disabled");
    $("#txtNumeroAdivinar").attr("disabled", "disabled");
    numeroAdivinar = Math.ceil(Math.random() * 100);
}

function verificarNumero(){
    cantidadIntentos++;
    numeroIngresado = Number($("#txtNumeroIngresado").val());
    $("#txtNumeroIngresado").val("");
    distancia = numeroIngresado - numeroAdivinar;
    if(distancia < 0){
        distancia *= -1;
    }
    
    if(distancia > 15){
        $("#pResultado").html("Esta a más de 15 numeros");
    }else if(distancia > 10){
        $("#pResultado").html("Esta a más de 10 numeros");
    }else if(distancia > 5){
        $("#pResultado").html("Esta a más de 5 numeros");
    }else if(distancia > 0){
        $("#pResultado").html("Esta entre 1 y 5 numeros");
    }else{
        $("#pResultado").html("Ganaste en " + cantidadIntentos + " intentos.");
    }
    

}
