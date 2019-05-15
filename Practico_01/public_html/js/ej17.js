var numeroChirridos;
var calculoEnF;
var calculoTransformadoaCe;
var calculoEnC;

$("#btnMostrarTemperatura").click(calculoChirrido);
        function calculoChirrido(){
            numeroChirridos = Number ($("#txtingreso").val());
            calculoEnF = 50 + ((numeroChirridos - 40)/4);
            calculoTransformadoaCe = (calculoEnF - 32)/1.8;
            calculoEnC = 10 + ((numeroChirridos - 40)/7);
            
            $("#pResultado").html("Resultado en Fahrenheit: " + calculoEnF);
            $("#pResultadoCelcius").html("Resultado trnsformado a Celcius: " + calculoTransformadoaCe);
            $("#pResultadoCelciusDirecto").html("Resultado en Celcius Directo: " + calculoEnC);
            
        }