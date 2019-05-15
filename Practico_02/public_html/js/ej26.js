var noches;
var nochesRegalo;
var metodoDePago;

$("#btnCalculrNoches").click(calcularNoches);
    function calcularNoches(){
        noches = Number($("#nochesAlojarse").val());
        metodoDePago = $("#slcmetodoPago").val();

        switch(metodoDePago){
            case "E":
                if(noches > 3 && noches < 7){
                    nochesRegalo = 1;
                }
                else if(noches >= 7){
                    nochesRegalo = 2;
                }else {
                    nochesRegalo = 0;
                }break
            case "T":
                if(noches > 3 && noches < 7){
                    nochesRegalo = 1;
                }
                else if(noches >= 7){
                    nochesRegalo = 3;
                }else {
                    nochesRegalo = 0;
                }break
            }
                $("#pNochesRegalo").html("Hay " + nochesRegalo + " noches de regalo, el cliente se hospeda " + (noches+nochesRegalo) + " noches, el costo total son $" + (noches * 40));
               




    }