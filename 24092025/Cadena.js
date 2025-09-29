function ConcatenarCadena(){
    nombre=document.getElementById("nombre").value;
    paterno=document.getElementById("paterno").value;
    materno=document.getElementById("materno").value;
    completo = nombre+" "+paterno+" "+materno;
    document.getElementById("completo").value=completo;
    document.getElementById("posicion").value=completo.charAt(3);
}

function CalcularCadena(){
    cadena=document.getElementById("cadena").value;
    longitud=cadena.length;
    document.getElementById("longitud").value=longitud
}

function MayusMinus(){
    cadena=document.getElementById("cadena2").value;
    mayus=cadena.toUpperCase();
    minus=cadena.toLowerCase();
    document.getElementById("Mayus").value=mayus;
    document.getElementById("Minus").value=minus;
}

function FormatoFecha(){
    dia=parseInt(document.getElementById("dia").value);
    mes=parseInt(document.getElementById("mes").value);
    año=parseInt(document.getElementById("año").value);
    fecha=dia+"/"+mes+"/"+año;
    document.getElementById("fecha").value=fecha;
}