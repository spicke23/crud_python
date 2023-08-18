function ValidaFormulario(){
    let mensajeFormulario = 'El formulario presenta campos vacíos:\n';
    let usuario = document.getElementById('usuario').value;
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('email').value;
    let clave = document.getElementById('clave').value;
    let clave2 = document.getElementById('clave2').value;

    userF = ValidaUsuario(usuario);
    nameF = ValidaNombreUsuario(nombre);
    lastF = ValidaApellidoUsuario(apellido);
    mailF = ValidaCorreoUsuario(email);
    pass1 = ValidaClaveUno(clave);
    pass2 = ValidaClaveDos(clave2);

    if(userF == 0){
        mensajeFormulario = mensajeFormulario + '-> Nombre de usuario\n';
    }
    if(nameF == 0){
        mensajeFormulario = mensajeFormulario + '-> Campo Nombre\n';
    }
    if(lastF == 0){
        mensajeFormulario = mensajeFormulario + '-> Campo Apellido\n';
    }
    if(mailF == 0){
        mensajeFormulario = mensajeFormulario + '-> Dirección de correo incorrecta o se encuentra vacía\n';
    }
    if(pass1 == 0){
        mensajeFormulario = mensajeFormulario + '-> Campo Clave\n';
    }
    if(pass2 == 0){
        mensajeFormulario = mensajeFormulario + '-> Campo Comprobar Clave\n';
    }

    if((userF == 0) && (nameF == 0) && (lastF == 0) && (mailF == 0) && (pass1 == 0) && (pass2 == 0)){
        alert(mensajeFormulario);
        return false;
    }
    else{
        if((pass1 == 1) && (pass2 == 1)){
            if(clave != clave2){
                alert('El valor de las claves no coinciden');
                return false;
            }
        }
    }
    return true;
}
    
function ValidaUsuario(usuario){
    let expr = /^([a-zA-Z0-9_\.\-])+$/;
    if(!expr.test(usuario)){
        return 0;
    }
    return 1;
}

function ValidaNombreUsuario(nombre){
    let expr = /^([a-zA-Z])+$/;
    if(!expr.test(nombre)){
        return 0;
    }
    return 1;
}

function ValidaApellidoUsuario(apellido){
    let expr = /^([a-zA-Z])+$/;
    if(!expr.test(apellido)){
        return 0;
    }
    return 1;
}

function ValidaCorreoUsuario(email){
    let expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!expr.test(email)){
        return 0;
    }
    return 1;
}

function ValidaClaveUno(clave){
    let expr = /^([a-zA-Z0-9_\.\-])+$/;
    if(!expr.test(clave)){
        return 0;
    }
    return 1;
}

function ValidaClaveDos(clave){
    let expr = /^([a-zA-Z0-9_\.\-])+$/;
    if(!expr.test(clave)){
        return 0;
    }
    return 1;
}
