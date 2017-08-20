var usuariosRegistrados=[];
var log;
var post = [];
var numero ;

function addEvents(){

  cargarPerfil();
  cargarVendor();
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

      function cargarVendor() {

  var storageUsuarios = localStorage.getItem('personaVendor');
  if(storageUsuarios == null){
    usuariosRegistrados = [];
  }else{
    usuariosRegistrados = JSON.parse(storageUsuarios);
  }
        document.getElementById('lblUsuario2').innerHTML = usuariosRegistrados.usuario;
        document.getElementById('lblNombre2').innerHTML = usuariosRegistrados.nombre;
        document.getElementById('lblCorreo2').innerHTML = usuariosRegistrados.correo;
        document.getElementById('lblTelefono2').innerHTML = usuariosRegistrados.telefono;
        document.getElementById('lblDireccion2').innerHTML = usuariosRegistrados.direccion;
        if(usuariosRegistrados.servicio == ""){
          document.getElementById('lblProveedor2').innerHTML = "No";
           document.getElementById('lblServicio2').innerHTML = "No Posee Servicios";
          document.getElementById('lblDescripcion2').innerHTML = "No posee Servicios";
        }else{
           document.getElementById('lblProveedor2').innerHTML = "Si";
            document.getElementById('lblServicio2').innerHTML = usuariosRegistrados.servicio;
           document.getElementById('lblDescripcion2').innerHTML = usuariosRegistrados.descripcion;
        } 
      }

      
