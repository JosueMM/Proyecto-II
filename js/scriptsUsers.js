editar();





function editar(){

  var storageUsuarios = localStorage.getItem('personaLogueada');
  if(storageUsuarios == null){
    usuariosRegistrados = [];
  }else{
    usuariosRegistrados = JSON.parse(storageUsuarios);
  }
                document.getElementById('usuario').value = usuariosRegistrados.usuario;
                 document.getElementById('apellido').value =usuariosRegistrados.apellido;
                 document.getElementById('nombre').value =usuariosRegistrados.nombre;
                document.getElementById('telefono').value=usuariosRegistrados.telefono;
                document.getElementById('direccion').value=usuariosRegistrados.direccion;
                document.getElementById('descripcion').value=usuariosRegistrados.descripcion;
                document.getElementById('servicio').value=usuariosRegistrados.servicio;
                document.getElementById('correo').value = usuariosRegistrados.correo;
                
}

function updateUser(){
var storageUsuarios = localStorage.getItem('personaLogueada');
  if(storageUsuarios == null){
    usuariosRegistrados = [];
  }else{
    usuariosRegistrados = JSON.parse(storageUsuarios);
  }
  
     users = JSON.parse(localStorage.getItem('Varaditico_usuarios'));
                
if(document.getElementById('contrasena').value==document.getElementById('contrasena2').value){
     for (var i = 0; i < users.length; i++) {
        
  if(usuariosRegistrados.usuario==users[i].usuario){
                 users[i].usuario = document.getElementById('usuario').value;
                 users[i].apellido = document.getElementById('apellido').value;
                 users[i].nombre = document.getElementById('nombre').value;
                 users[i].contrasena =document.getElementById('contrasena').value;
                 users[i].telefono = document.getElementById('telefono').value;
                 users[i].correo = document.getElementById('correo').value;
                 users[i].direccion = document.getElementById('direccion').value;
                 users[i].descripcion = document.getElementById('descripcion').value;
                 users[i].servicio = document.getElementById('servicio').value;
                 users[i].estrellas = users[i].estrellas;
                 personaLogueada(users[i]);
                 
      }
         localStorage.setItem('Varaditico_usuarios', JSON.stringify(users));
         
         alert("Actualizacion Completa");
         location.href ="Perfil.html";
    
  }   
}else{
              alert("Contrasenas no coinciden");
         }
}

function validarCampos(){
  if(document.getElementById("telefono").value == ""){
     alert("Tiene que llenar todos los datos");
  }
  else if(document.getElementById("contrasena").value==""){
  alert("Tiene que llenar todos los datos");
  }
  else if(document.getElementById("contrasena2").value==""){
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

else if(document.getElementById("contrasena").value == document.getElementById("contrasena2").value){
    updateUser();
}else{
  alert("Contrasenas Invalidas (no coinciden)");
       } 
        
     
}

function personaLogueada(persona) {
  localStorage.setItem('personaLogueada', JSON.stringify(persona))
}
