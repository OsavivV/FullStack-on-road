function alquilerVehiculo(tipoVehiculo,diasAlquiler,sillaBebe,){
    let valorTipoVehiculo=0;
    let valorSilla=0;

    
        if (tipoVehiculo=="compacto"){
        valorTipoVehiculo = 14000 *diasAlquiler
    }
        else if (tipoVehiculo=="mediano"){
        valorTipoVehiculo = 17000 *diasAlquiler
    }
        else if (tipoVehiculo=="camioneta"){
        valorTipoVehiculo = 28000 *diasAlquiler
    }
        
        if(sillaBebe==true){
        valorSilla = 12000 *diasAlquiler
    }


    let calculoTotal=(valorSilla+valorTipoVehiculo);

        if (valorSilla){    //porque funciona de esta manera si valor silla aca no tiene nada que me indique si es true o no//
            console.log("Estimado cliente: en base al tipo de Vehiculo " + tipoVehiculo + " alquilado, considerando los " + diasAlquiler + " dias utilizados," + " mas servicios de alquiler de silla para bebes de $" + valorSilla +" ,su monto total a pagar es de $" + calculoTotal )
     }
        
        else {
            console.log("Estimado cliente: en base al tipo de Vehiculo " + tipoVehiculo + " alquilado, considerando los " + diasAlquiler + " dias utilizados, el monto total a pagar es de $" + calculoTotal + " sin cargos adicionales a su factura")
     }
    
}

alquilerVehiculo("mediano",2,false)




