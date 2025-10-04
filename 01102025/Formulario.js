function Evaluar(){
    nombre=document.getElementById("cajaNombre").value;
    genero=document.getElementById("cajaGenero").value;
    edad=document.getElementById("cajaEdad").value;

    if(genero == "Masculino"){
        alert("El formulario de la persona "+nombre+" es de genero masculino");
    }
    else{
        alert("La edad de la personal con genero femenino es "+edad);
    }

    if(edad<11){
        leyenda="es un niño"
    }
    else{
        leyenda="es un adolescente, adulto o adulto mayor";
    }

    document.getElementById("area").value="Persona:"+nombre+" Genero:"+genero+" Edad:"+edad+ " Etapa de vida:"+leyenda;
}

var btnEvaluar=document.getElementById("BtnEvaluar");
btnEvaluar.addEventListener("click", Evaluar);