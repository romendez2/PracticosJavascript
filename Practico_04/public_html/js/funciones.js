//1
function obtenerCantidadParesEntre(_n1, _n2) {
    var _cantidadPares = 0;
    for (var i = _n1; i <= _n2; i++) {
        if (i % 2 === 0) {
            _cantidadPares++;
        }
    }
    return _cantidadPares;
    }
//1-2-3-4-5 
function mostrarMensaje(_msj) {
    $("#pRes").append(_msj + "<br>");
    
}
//2
function esMayor(_edad, _tope){
    var _es ;
    if(_edad > _tope){
        _es = true;
    }else{
        _es = false;
    }
    return _es;
}
//3
function esBisiesto(year){
    var es = 0;
    if(year % 4 === 0 && year % 100 !==0 || year % 4 === 0 && year % 400 === 0){
        es = true;
    }else{
        es = false;
    }
    return es;
}
//4
function calcularArea(_base, _altura){
    var area = -1;l
    if(_base > 0 && _altura > 0){
        area = _base * _altura / 2;
    }
        return area;     
}
    var area = calcularArea(2, 6);
    console.log(area);
//5
function areaRectangulo(_base, _altura){
    var area;
    if(_base > 0 && _altura > 0){
        area = _base * _altura;
    }
    return area;
}
//6
function cambioGrados(_temperatura){
    var grados;
    grados = 1.8 * _temperatura + 32;
    return grados;
}
//7
function conversionFahrenheit(_temperatura, _unidad){
    var convertido;
    if(_unidad === "Celsius"){
        convertido  = (_temperatura - 32) / 1.8;
    }else if(_unidad === "Kelvin"){
        convertido = (_temperatura + 459.67) / 1.8;
    }else if(_unidad === "Rankine"){
        convertido = _temperatura + 459.67;
    }else{
        convertido = (_temperatura - 32) / 2.25;
    }
    return convertido;
}
//8
function calcularPotencial(_base, _exponente){
    var _base; 
    var _exponente;
    var potencia = 1

while(_exponente > 0){
potencia = potencia * _base;
_exponente--;
    }return potencia;
}
//$("#pRes").html(Math.pow(2,8));

//9
function numeroPositivo(_dias, _horas){
    var _dias;
    var _horas;
    var positivo;
    if(_dias < 0 && _horas < 0){
        positivo = false;
    }else{ positivo = true;
    }
}return positivo;

function calcTotalHoras(_dias,_horasTrabajo,_tipoAsistente){
    var _dias;
    var _horasTrabajo;
    var _tipoAsistente;
    var precio = 0;
    var totalSalario = 0;
    
     if(_tipoAsistente === "S"){
        precio = _horasTrabajo * 350;
     }else{precio = _horasTrabajo * 200;
     }
     totalSalario = precio * _dias;
}return totalSalario;

function valorTotalGastos(_precioMateriales){
    var _precioMateriales;
    var precioTotalGastos = 0;
    precioTotalGastos = _precioMateriales * 1.10;
}return precioTotalGastos;





/*var cant = obtenerCantidadParesEntre(4, 60);
 console.log(cant);
 $("#btnMostrar").click(tomarDatos);
 function tomarDatos(){
 var _num1 = Number($("#slcMenor").val());
 var _num2 = Number($("#slcMayor").val());
 var _cantidadObtenida = obtenerCantidadParesEntre(_num1, _num2);
 mostrarMensaje(_cantidadObtenida);
 }*/
/*$("#btnMostrar").click(tomarDatos);
 //$("#pRes").append("Comenzar<br>");
 mostrarMensaje("Comenzar");
 function tomarDatos(){
 var _numero1 = Number($("#txtN1").val());
 var _numero2 = Number($("#txtN2").val()); 
 var _res = sumarNumeros(_numero1, _numero2);
 mostrarMensaje(_res);
 //mostrarMensaje(sumarNumeros(_numero1, _numero2));
 }

 function sumarNumeros(_a, _b){
 var _suma = _a + _b;
 return _suma;
 }
 */
/*var n1 = 22;
 var n2 = 32;
 var res = sumarNumeros(n1, n2);
 alert(res);
 var resultado = sumarNumeros(4, 7);//11
 $("#pRes").html(resultado);
 var suma;*/
/*
 function tirarDado() {
 var _aleatorio = Math.ceil(Math.random() * 6);
 return _aleatorio;
 }
 for (var i = 0; i < 10; i++) {
 console.log(tirarDado());
 }
 */
/*mostrarMensaje("Santiago", "m");
 mostrarMensaje("Agustín", "m");
 mostrarMensaje("Luciana", "f");
 alert("Hola");
 function mostrarMensaje(nombre, sexo) {
 if (sexo === "m") {
 $("#pRes").append("Bienvenido " + nombre + "<br>");
 }else{
 $("#pRes").append("Bienvenida " + nombre + "<br>");
 }
 }*/
/*
function esMayor(_edad, _tope){
    return _edad > _tope;
}
/*function esMayor(_edad, _tope){
    if(_edad > _tope){
        return true;
    }else{
        return false;
    }
}*/
/*function esMayor(_edad, _tope){
    var _es  = false;
    if(_edad > _tope){
        _es = true;
    }
    return _es;
}*/
/*function esMayor(_edad, _tope){
    var _es ;
    if(_edad > _tope){
        _es = true;
    }else{
        _es = false;
    }
    return _es;
}*/
/*
function obtenerCantidadParesEntre(_n1, _n2) {
    var _cantidadPares = 0;
    for (var i = _n1; i <= _n2; i++) {
        if (i % 2 === 0) {
            _cantidadPares++;
        }
    }
    return _cantidadPares;
}
function sumarNumeros(_a, _b) {
    var _suma = _a + _b;
    return _suma;
}
function tirarDado() {
    var _aleatorio = Math.ceil(Math.random() * 6);
    return _aleatorio;
}
*/
