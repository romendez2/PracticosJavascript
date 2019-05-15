var caracter;


$("#btnVer").click(verificarCaracter);
    function verificarCaracter(){
        caracter = $("#ingresoLetra").val();
        if(caracter === "A" || caracter === "a"){
            $("#pVer").html("El caracter " + caracter + " es vocal");
        }else if (caracter === "E" || caracter === "e"){
            $("#pVer").html("El caracter " + caracter + " es vocal");
        }else if (caracter === "I" || caracter === "i"){
            $("#pVer").html("El caracter " + caracter + " es vocal");
        }else if (caracter === "O" || caracter === "o"){
            $("#pVer").html("El caracter " + caracter + " es vocal");
        }else if (caracter === "U" || caracter === "u"){
            $("#pVer").html("El caracter " + caracter + " es vocal");
        }else   $("#pVer").html("El caracter " + caracter + " no vocal");
        
    }

