var equipo1;
var equipo2;
var puntajeActual1 = 0;
var puntajeActual2 = 0;
var puntajeTotal1;
var puntajeTotal2;
var ganador;

$("#btnPuntos").click(guardarPuntos);
    function guardarPuntos(){
        equipo1 = Number ($("#pun1").val());
        $("#pun1").val("");
        equipo2 = Number ($("#pun2").val());
        $("#pun2").val("");
        
        //sumo puntos
        puntajeActual1 += equipo1;
        puntajeActual2 += equipo2;
        
        //muestros puntos actuales
        $("#pPuntosE1").html("Puntos del equipo 1: " + puntajeActual1);
        $("#pPuntosE2").html("Puntos del equipo 2: " + puntajeActual2);
        
        //declaro ganador
        if(puntajeActual1 >= 30 || puntajeActual2 >= 30){
            $("#btnPuntos").attr("disabled", "disabled");
            $("#pun1").attr("disabled", "disabled");
            $("#pun2").attr("disabled", "disabled");
            $("#pGanador").html("Tenemos ganador!!");
            $("#pPuntosTotalesE1").html("Puntos Finales del equipo 1: " + puntajeActual1);
            $("#pPuntosTotalesE2").html("Puntos Finales del equipo 2: " + puntajeActual2);
        }
        
    }
          
        
            
        
        
    
