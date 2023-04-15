let operacion = " ";
let num1 = 2;
let num2 = 2;
let resultado = (num1 + num2);

switch(operacion) {
    case "sumar" :
        console.log( resultado == 4? "el resultado de la suma sera = 4": "syntax error" );
        break;
    case "restar" :
        console.log( resultado == 2? "el resultado de la resta sera = 2": "syntax error ");
        break;
    case "multiplicar" :
        console.log( resultado ==0 ? "el resultado de la multiplicacion sera = 4": "syntax error" );
        break;
    case "dividir" : 
        console.log(resultado == 1? "el resultado de la division sera = 1": "syntax error" );
        break;
    default : 
        console.log(" Las operaciones aceptadas son: Sumar - Restar - Multiplicar - Dividir");
        break;
}