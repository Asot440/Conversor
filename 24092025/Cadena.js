function ConcatenarCadena(){
    nombre=document.getElementById("nombre").value;
    paterno=document.getElementById("paterno").value;
    materno=document.getElementById("materno").value;
    completo = nombre+" "+paterno+" "+materno;
    document.getElementById("completo").value=completo;
    document.getElementById("posicion").value=completo.charAt(3);
}