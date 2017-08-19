var usuariosRegistrados=[];
var log;
var post = [];
var numero ;

function addEvents(){

  cargarPerfil();
}

addEvents();

function cargarPerfil() {

    	var storageUsuarios = localStorage.getItem('personaLogueada');
  if(storageUsuarios == null){
    usuariosRegistrados = [];
  }else{
    usuariosRegistrados = JSON.parse(storageUsuarios);
  }
      	document.getElementById('lblUsuario').innerHTML = usuariosRegistrados.usuario;
      	document.getElementById('lblNombre').innerHTML = usuariosRegistrados.nombre;
      	document.getElementById('lblCorreo').innerHTML = usuariosRegistrados.correo;
      	document.getElementById('lblTelefono').innerHTML = usuariosRegistrados.telefono;
      	document.getElementById('lblDireccion').innerHTML = usuariosRegistrados.direccion;
      	if(usuariosRegistrados.servicio == ""){
          document.getElementById('lblProveedor').innerHTML = "No";
           document.getElementById('lblServicio').innerHTML = "No Posee Servicios";
          document.getElementById('lblDescripcion').innerHTML = "No posee Servicios";
      	}else{
      		 document.getElementById('lblProveedor').innerHTML = "Si";
      		  document.getElementById('lblServicio').innerHTML = usuariosRegistrados.servicio;
      		 document.getElementById('lblDescripcion').innerHTML = usuariosRegistrados.descripcion;
      	} 
      }