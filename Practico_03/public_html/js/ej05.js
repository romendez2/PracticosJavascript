var numero;

$("#btnVer").click(verMultiplos);
    function verMultiplos(){
        for(i= 0; i<= 450; i++){
            if(i % 5 === 0){
                $("#pResultado").append(i + "<br>");
            }
            
        }
    }