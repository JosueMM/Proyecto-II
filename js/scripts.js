var usuariosRegistrados=[];
var log;
var post = [];
var numero ;
var vendor;

function addEvents(){
	getProveedores();

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
  var terminado = "F";
  var f = new Date();
var fecha  = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
var id = localStorage.getItem('servContratados');
var indet;

if(id != null){
for (var i = 0; i < id.length; i++) {
  if(id[i].id == null){
indet = i;
  }else{
    indet = i +1;
  }
}
}else{
  indet = 0;
}




var tojson = 

            {
                "id": indet,
                "terminado":terminado,
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
    var estrellas = 0; 

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
                "descripcion":descripcion,
                "estrellas":estrellas
            

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
      if(table != null){
         table.innerHTML = null;
      }

      usuarios.forEach(function(usuario, index, usuarios) {
      	if(usuario.servicio != ""){
			tabla(usuario)
      	}
      });
      seleccion();
    }

function tabla(usuarios) {
        var table = document.getElementById("users_table");
        var row = "</td><td>"+usuarios.usuario+"</td><td>"+usuarios.servicio+"</td><td>"+usuarios.nombre+"</td><td>"+usuarios.telefono+"</td></tr>";
        table.innerHTML = table.innerHTML + row;
    }


 

function valorar(numero){
    var idUserActive = JSON.parse(localStorage.getItem('valorar'));
     users = JSON.parse(localStorage.getItem('Varaditico_usuarios'));
     for (var i = 0; i < users.length; i++) {
         if(idUserActive.usuario==users[i].usuario){
                 users[i].usuario = users[i].usuario;
                 users[i].apellido = users[i].apellido;
                 users[i].nombre = users[i].nombre;
                 users[i].contrasena =users[i].contrasena;
                 users[i].telefono = users[i].telefono;
                 users[i].correo = users[i].correo;
                 users[i].direccion = users[i].direccion;
                 users[i].descripcion = users[i].descripcion;
                 users[i].servicio = users[i].servicio;
                 users[i].estrellas = users[i].estrellas+numero;
                 personaLogueada(users[i]);
         }
         localStorage.setItem('Varaditico_usuarios', JSON.stringify(users)); 
         
    }
         location.href ="Perfil.html";
  
}



 
    
    

