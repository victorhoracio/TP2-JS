//declaro una vble para concatenar
let texto="";
//bucle do while
do{
    //ingrese una cadena
    let cadena=prompt('ingresa un texto');
    // si la variable texto esta vacia
    if(texto==""){
        //concatenamos sin utilizar guión
        texto=texto+cadena;
    }
    else{//sino concatenamos con un guion
        texto=texto+"-"+cadena;
    }
   //Mientras se pulse aceptar en el mensaje emergente confirm

}while(confirm("Desea seguir?"));
//si se pulso cancelar imprimimos el resultado
document.writeln(texto);