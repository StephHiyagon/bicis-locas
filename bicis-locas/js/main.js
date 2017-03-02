var nombre=document.getElementById('name').value;
var apellido=document.getElementById('lastname').value;
var correo=document.getElementById('inputEmail').value;
var contrasena=document.getElementById('inputPassword').value;
var escoger=document.getElementById('bici').selectedIndex;

function valida(nombre,apellido,correo,contrasena,escoger){
	/* Escribe tú código aquí */
  if(nombre==null || nombre.length==0 || !(^\d*$/.test(nombre)){
    alert("error");
    return false;
  }
  else if(apellido==null || apellido.length==0 || !(^\d*$/.test(apellido))){
    alert("error");
    return false;
  }
  else if( escoger == null || escoger == 0 ) {
    alert("error");
    return false;
  }
  else if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(correo)) ) {
    alert("error");
    return false;
  }
  else if( !(/^\d{6}$/.test(contrasena)) || contrasena=="password" || contrasena==123456 || contrasena==098754 ) {
    alert("error");
    return false;
}
  return true;
}
