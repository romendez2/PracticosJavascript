var pedido;
var nombre = "";
var totalPedidos = 0;
var pedidoMasalto = 0;
var clienteYpedidoAlto;
var stock;
var stockDisponible;

$("#btnIngresoStock").click(ingresoStock);
    function ingresoStock(){
        stock = Number($("#Stock").val());
        $("#Stock").attr("disabled", "disabled");
        $("#btnIngresoStock").attr("disabled", "disabled");
    }

$("#btnCalculo").click(calcular);
    function calcular(){
        pedido = Number($("#pedidoSolicitado").val());
        $("#pedidoSolicitado").val('')
        nombre = $("#nombreCliente").val();
        $("#nombreCliente").val('')
        if(pedido > pedidoMasalto){
            pedidoMasalto = pedido;
        
            clienteYpedidoAlto = nombre + ", con " + pedidoMasalto + " camaras";
            //$("#pCliente").html("El cliente con el pedido mas alto es: " + clienteYpedidoAlto);
        }       
        if(pedido <= stock){
            stockDisponible = stock - pedido;
            totalPedidos++;
            $("#pTotal").html("Los pedidos en total son " + totalPedidos);
        
            $("#pCalculado").html(nombre + ", tenemos " + pedido + " camaras disponible." + "<br>Por el momento van quedando " + stockDisponible + " en stock");
            stock = stockDisponible
        }else if (pedido > stockDisponible){
            $("#pCalculado").html("Disculpe, no tenemos ese stock disponible");

        }
        if (stockDisponible === 0){
            $("#btnCalculo").attr("disabled", "disabled");
            $("#pedidoSolicitado").attr("disabled", "disabled");
            $("#nombreCliente").attr("disabled", "disabled");
            $("#pCliente").html("El cliente con el pedido mas alto es: " + clienteYpedidoAlto);
            $("#pCalculado").html("El Stock se agoto");
        } 

        
    }