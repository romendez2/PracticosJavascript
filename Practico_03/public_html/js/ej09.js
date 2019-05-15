var numero1;
var numero2;
var resultado = 0;

$("#btnVer").click(verProducto);
    function verProducto(){
        numero1 = Number($("#num1").val());
        numero2 = Number($("#num2").val());
        for(i = 1; i <= numero2; i++){
            resultado = resultado + numero1;
            
            
        }
        $("#pVer").html(resultado + "<br>");
            $("#btnVer").attr("disabled", "disabled");
    }
