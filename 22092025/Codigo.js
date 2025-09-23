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

function CelsFahr(){
    celsius=parseFloat(document.getElementById("Celsius").value);
    fahrenheit=(9/5)*celsius+32;
    document.getElementById("Fahrenheit").value=fahrenheit
}

function Operaciones(){
    a=parseFloat(document.getElementById("NumA").value)
    b=parseFloat(document.getElementById("NumB").value)
    suma=a+b;
    document.getElementById("Suma").value=suma
    resta=a-b;
    document.getElementById("Resta").value=resta
    multi=a*b;
    document.getElementById("Multi").value=multi
    div=a/b;
    document.getElementById("Div").value=div
}