
var suma = 0;

do {
    
    var numero = prompt("Introduce un numero");
    // compruebo si es un numero
    if (Number(numero) == numero) {
  
      // sumo el numero
        suma = suma + numero;
    }
    // si no es un numero
    else {
        // si cleckea aceptar entra y pone este alert
        if (numero != undefined) {
            alert(numero + " No es un numero");
        }
    }
// Vuelve arriba no se puede cancelar
} while (numero != undefined);
// al presionar cancelar se imprime la suma
document.write(suma);