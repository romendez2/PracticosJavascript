var nota;
var contadorNotas = 0;
var clicksIngresos = 0;
var nombreAlumno = "";
var notaAlta = 0;
var notaBaja = Infinity;
var cond1 = 0;
var cond2 = 0;
var cond3 = 0;


$("#btnIngreso").click(ingresoNotas);
    function ingresoNotas() {
        clicksIngresos++;
        nombreAlumno = $("#alumno").val();
        $("#alumno").val('');
        nota = Number($("#ingresoNota").val());
        $("#ingresoNota").val('');
        contadorNotas += nota;
        if(nota <70){
            cond1++;
        }
        if(nota >= 70){
            cond2++;
        }
        if(nota > 90){
            cond3++;
        }
        if(nota > notaAlta){
            notaAlta = nota;
        }
        if(nota < notaBaja){
            notaBaja = nota
        }
            $("#pResultado").html(cond1 + " Alumnos perdieron");
            $("#pResultado2").html(cond2 + " Alumnos salvaron");
            $("#pResultado3").html(cond3 + " Alumnos de los que salvaron fue con buena nota");
            $("#pResultado4").html("La nota maxima es: " + notaAlta);
            $("#pResultado5").html("La nota minima es: " + notaBaja);
            // $("#pResultado4").html("La nota maxima es: " + Math.max(contadorNotas));
            $("#pResultado6").html("El promedio de notas es: " + (contadorNotas / clicksIngresos));
    
            $("#pResultado7").append(" El alumno: " + nombreAlumno + "<br>" + "Saco en el examen: " + nota + "<br>");
    
}