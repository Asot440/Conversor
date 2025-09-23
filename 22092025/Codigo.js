function convertidorMetrosKilometros(){
    //Una variable es un espacio de memoria para almacenar un valor.
    metros=parseInt(document.getElementById("CajaMetros").value);
    //Operacion.
    kilometros=metros/1000;
    //Asigna el valor de la operacion a la caja kilometros.
    document.getElementById("CajaKilometros").value=kilometros
}

function CalIMC(){
    altura=parseFloat(document.getElementById("Altura").value);
    peso=parseFloat(document.getElementById("Peso").value);
    altura2=altura*altura;
    imc=peso/altura2;
    document.getElementById("IMC").value=imc
}