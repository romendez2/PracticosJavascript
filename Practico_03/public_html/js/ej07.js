var ingreso;

$("#btnVer").click(verGuiones);
    function verGuiones(){
        ingreso = Number($("#numero").val());
        
        for(i = 0; i < ingreso; i++){
          
          $("#pResultado").append("-");
        }
        
    }