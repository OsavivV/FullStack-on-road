let pagoMes = 75000;
let consumoKWH = 290 ;
let porcentaje = 20;
let calculoAumento =((pagoMes * porcentaje)/100);

let resultado = consumoKWH >300? "Debito a que su hogar tuvo un consumo de "+ consumoKWH + "kwh," + " en base al ajuste tarifario, cumplimos con informarle que se ha ajustado el total a pagar, que sera de $" + calculoAumento : "señor usuario le informamos que su factura del mes de diciembre por valor de $" +pagoMes+  " esta cubierta por el subsidio por consumo mensual para los estratos 1, 2 y 3" ;
console.log(resultado);

