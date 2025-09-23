function convertidorMetrosKilometros(){
    //Una variable es un espacio de memoria para almacenar un valor.
    metros=parseInt(document.getElementById("CajaMetros").value);
    //Operacion.
    kilometros=metros/1000;
    //Asigna el valor de la operacion a la caja kilometros.
    document.getElementById("CajaKilometros").value=kilometros
}