
function validateForm(){
  var nombre=document.getElementById('name').value;
  var apellido=document.getElementById('lastname').value;
  var correo=document.getElementById('input-email').value;
  var contrasena=document.getElementById('input-password').value;
  var indice=document.getElementById('bici').selectedIndex;
  var twit=document.getElementById('input-social').value;
  console.log(nombre);
  console.log(apellido);
  console.log(correo);
  console.log(contrasena);
  console.log(indice);


	/* Escribe tú código aquí */
  if(nombre==="" || apellido ==="" || correo ==="" || contrasena ==="" || indice === 0 || twit==="" ){
    alert("todos los campos son obligatorios");
    return false;
    }
  else if (!(/^[A-Z]+[a-z]$/.test(nombre)) ) {
    alert("Sólo se permiten caracteres de la a- z, la primera letra debe ser mayúscula");
    return false;
    }

  else if (!(/\w+@\w+\.+[a-z]/.test(correo))) {
      alert("El correo no tiene un formato valido");
      return false;
    }
  else if (contrasena.length<=5) {
    alert("la contraseña debe tener mínimo 6 caracteres");
    return false;
  }
  else if (contrasena==="password" || contrasena==="123456" || contrasena==="098754") {
    alert("la contraseña no es valida");
    return false;
  }
}
