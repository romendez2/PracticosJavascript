 var numero = -33;

$("#btnVer").click(verMultiplos);
    function verMultiplos(){
        
        while(numero <= 230){
            numero++;
            if(numero % 4 === 0)
            
            $("#pResultado").append(numero + "<br>");
            
            }
    }