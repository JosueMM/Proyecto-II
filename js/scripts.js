var usuariosRegistrados=[];
var log;
var post = [];
var numero ;
var vendor;

function addEvents(){
	
	getProveedores();
  seleccion();
  servCntra();
  
}

addEvents();
	

function login() {
    var emailInterfaz = document.getElementById("usuario").value;
    var passwordInterfaz = document.getElementById("psw").value;
    
    var usuarios = JSON.parse(localStorage.getItem("Varaditico_usuarios"));
    var intento = 1;
    for (var i = 0; i < usuarios.length; i++) {
        var email = usuarios[i].usuario;
        var pass = usuarios[i].contrasena;
        if(emailInterfaz == email && passwordInterfaz == pass){
           personaLogueada(usuarios[i]);
            log = usuarios[i].usuario;
            location.href =("Principal.html");
            
           intento = 0 ;
            break;
        }
    }
    if(intento == 1){
            alert("Usuario o Contraseña Inválida."); 
    }
}

function personaLogueada(persona) {
    localStorage.setItem('personaLogueada', JSON.stringify(persona))
}

function validarCampos(){
	if(document.getElementById("telefono").value == ""){
     alert("Tiene que llenar todos los datos");
	}
	else if(document.getElementById("pass1").value==""){
	alert("Tiene que llenar todos los datos");
	}
	else if(document.getElementById("pass2").value==""){
	alert("Tiene que llenar todos los datos");
	}
	else if(document.getElementById("nombre").value==""){
	alert("Tiene que llenar todos los datos");
	}
	else if(document.getElementById("usuario").value==""){
	alert("Tiene que llenar todos los datos");
	}
	else if(document.getElementById("correo").value==""){
	alert("Tiene que llenar todos los datos");
	}
	else if(document.getElementById("direccion").value==""){
	alert("Tiene que llenar todos los datos");
	}
	else if(document.getElementById("apellido").value==""){
	alert("Tiene que llenar todos los datos");
	}

else if(document.getElementById("pass1").value == document.getElementById("pass2").value){
		guardarUsuario();
}else{
	alert("Contrasenas Invalidas (no coinciden)");
  	   } 
        
     
}

function validar(){


	var usuarios = [];

   
      usuarios = JSON.parse(localStorage.getItem('Varaditico_usuarios'));
         
    if(usuarios != null){
    	usuarios.forEach(function(usuario, index, usuarios) {
      	if(usuario.usuario == document.getElementById("usuario").value){
			alert("Usuario ya existe");
			return
      	}else {
             validarCampos();
      	}
      	 });
    }else{
    	validarCampos();
    
    }
}

function seleccion() {
    var table = document.getElementById("users_table");
     var rows = table.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        rows[i].onclick = (function() { 
            return function() {
              vendor = this.cells[0].innerHTML;
              BuscarVendor();
            }    
        })(i);
    }
}
function BuscarVendor(){

location.href="Acuerdo.html";
var usuarios = [];
      if (localStorage.getItem('Varaditico_usuarios')) {
          usuarios = JSON.parse(localStorage.getItem('Varaditico_usuarios'));  
      }

      usuarios.forEach(function(usuario, index, usuarios) {
        if(usuario.usuario == vendor){
            personaVendor(usuario);
        }
      });
}

function cancelarVendor(){
  localStorage.removeItem("personaVendor");
  location.href="Principal.html"
}

function servicioContratados(serv) {
    localStorage.setItem('servContratados', JSON.stringify(serv))
}

function personaVendor(persona) {
    localStorage.setItem('personaVendor', JSON.stringify(persona))
}

function contratarServ(){

var storageUsuarios = localStorage.getItem('personaVendor');
  if(storageUsuarios == null){
    vendedor = [];
  }else{
    vendedor = JSON.parse(storageUsuarios);
  }

  var usuarioVendedor = vendedor.usuario;
  var descripcionVendedor = vendedor.descripcion;
  var servicioVendedor = vendedor.servicio;
  var f = new Date();
var fecha  = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
var tojson = 
         
            {
                "vendedor": usuarioVendedor,
                "descripcion": descripcionVendedor,
                "servicio": servicioVendedor,
                "fecha":fecha

            };

    var info = JSON.parse(localStorage.getItem("servContratados"));

    if (info === null) {
        var arrayJson=[];
        arrayJson.push(tojson);
        localStorage.setItem("servContratados", JSON.stringify(arrayJson));
        window.location.href = "Perfil.html";
    } else {
        info.push(tojson);
        localStorage.setItem("servContratados", JSON.stringify(info));
        window.location.href = "Perfil.html";
    }


}


function guardarUsuario() {

    var phone =  document.getElementById("telefono").value; 
    var name = document.getElementById("nombre").value;
    var id = document.getElementById("usuario").value;
    var email = document.getElementById("correo").value;
    var password = document.getElementById("pass1").value;
    var location = document.getElementById("direccion").value;
    var lastName = document.getElementById("apellido").value;
    var service = document.getElementById("servicio").value;
    var descripcion = document.getElementById("descripcion").value;


    var tojson = 
         
            {
                "nombre": name,
                "usuario": id,
                "correo": email,
                "telefono":phone,
                "contrasena":password,
                "direccion":location,
                "apellido":lastName,
                "servicio": service,
                "descripcion":descripcion
            

            };

    var info = JSON.parse(localStorage.getItem("Varaditico_usuarios"));

    if (info === null) {
        var arrayJson=[];
        arrayJson.push(tojson);
        localStorage.setItem("Varaditico_usuarios", JSON.stringify(arrayJson));
        window.location.href = "login.html";
    } else {
        info.push(tojson);
        localStorage.setItem("Varaditico_usuarios", JSON.stringify(info));
        window.location.href = "login.html";
    }
     
}

function mostrarServ(){
document.getElementById('prov').style.display = 'block';
}

function ocultarServ(){
document.getElementById('prov').style.display = 'none';
document.getElementById('descripcion').value = "";
document.getElementById('servicio').value = "";
}         

 function getProveedores() {
      var usuarios = [];
      if (localStorage.getItem('Varaditico_usuarios')) {
          usuarios = JSON.parse(localStorage.getItem('Varaditico_usuarios'));  
      }
    var table = document.getElementById("users_table");
    table.innerHTML = null;
    
      usuarios.forEach(function(usuario, index, usuarios) {
      	if(usuario.servicio != ""){
			tabla(usuario)
      	}
      });
    }

function tabla(usuarios) {
        var table = document.getElementById("users_table");
        var row = "</td><td>"+usuarios.usuario+"</td><td>"+usuarios.servicio+"</td><td>"+usuarios.nombre+"</td><td>"+usuarios.telefono+"</td></tr>";
        table.innerHTML = table.innerHTML + row;
    }


 function updateUser(){
     var idUserActive = localStorage.getItem('personaLogueada');
     users = JSON.parse(localStorage.getItem('Varaditico_usuarios'));
if(document.getElementById('contrasenna').value==document.getElementById('ccontrasenna').value){
     for (var i = 0; i < users.length; i++) {
         if(idUserActive==users[i].idUsuario){
                 users[i].usuario = document.getElementById('usuario').value;
                 users[i].contrasena =document.getElementById('contrasenna').value;
                 users[i].telefono = document.getElementById('telefono').value;
                 users[i].correo = document.getElementById('correo').value;
                 users[i].direccion = document.getElementById('direccion').value;
         }else{
              alert("Error password");
         }
         localStorage.setItem('users', JSON.stringify(users));
         alert("Actualizacion Completa");
         location.href ="Perfil.html";

    }
  }   
}

 function servCntra() {
      var usuarios = [];
      if (localStorage.getItem('servContratados')) {
          usuarios = JSON.parse(localStorage.getItem('servContratados'));  
      }
    var table = document.getElementById("servContratados_table");
    table.innerHTML = null;
    
      usuarios.forEach(function(usuario, index, usuarios) {
        if(usuario.servicio != ""){
      tabla(usuario)
        }
      });
    }

function tabla(usuarios) {

        var table = document.getElementById("servContratados_table");
        if(table != null){
              var row = "</td><td>"+usuarios.servicio+"</td><td>"+usuarios.descripcion+"</td><td>"+usuarios.fecha+"</td></tr>";
        table.innerHTML = table.innerHTML + row;
        }else{
          var row = "</td><td>"+usuarios.servicio+"</td><td>"+usuarios.descripcion+"</td><td>"+usuarios.fecha+"</td></tr>";
          table.innerHTML = row;
        }
        
    }
    
    

