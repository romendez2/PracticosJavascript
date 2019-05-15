var a;
var b;
var c;
var resultado;

$("#btnVer").click(verAnumero);
    function verAnumero(){
        a = Number ($("#Num1").val());
        b = Number ($("#Num2").val());
        c = Number ($("#Num3").val());
        
        if(a > b && a > c){
            $("#pResultado").html("A es el mayor de los tres");
        }else
            $("#pResultado").html("A no es el mayor de los tres");
        
    }