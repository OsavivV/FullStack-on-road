let perfil = "dueño";

switch(perfil) {
    case "administrador" :
        console.log("ud tiene todos los privilegios del uso del sistema.");
        break;
    case "asistente" :
        console.log("ud solo tiene permisos de registrar, modificar y consultar datos.");
        break;
    case "invitado" :
        console.log("ud solo tiene permiso de consultar datos.");
        break;
    case "" : 
        console.log("debe especificar el perfil de usuario.");
        break;
    default : 
        console.log("debe especificar un perfil valido.");
        break;
}