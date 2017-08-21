var usuariosRegistrados=[];
var log;
var post = [];
var numero ;
var servicio;

function addEvents(){
  cargarPerfil();
  servCntra();
  servPendi();
}

addEvents();

function cargarPerfil() {

  var storageUsuarios = sessionStorage.getItem('personaLogueada');
  if(storageUsuarios == null){
    usuariosRegistrados = [];
  }else{
    usuariosRegistrados = JSON.parse(storageUsuarios);
  }

  users = JSON.parse(localStorage.getItem('Varaditico_usuarios'));
  for (var i = 0; i < users.length; i++) {
if(usuariosRegistrados.usuario == users[i].usuario){
document.getElementById('lblUsuario').innerHTML = usuariosRegistrados.usuario;
        document.getElementById('lblNombre').innerHTML = usuariosRegistrados.nombre;
        document.getElementById('lblCorreo').innerHTML = usuariosRegistrados.correo;
        document.getElementById('lblTelefono').innerHTML = usuariosRegistrados.telefono;
        document.getElementById('lblDireccion').innerHTML = usuariosRegistrados.direccion;
        if(usuariosRegistrados.servicio == ""){
          document.getElementById('lblProveedor').innerHTML = "No";
           document.getElementById('lblServicio').innerHTML = "No Posee Servicios";
           document.getElementById('lblDescripcion').innerHTML = "No posee Servicios";
           document.getElementById('estrellas').innerHTML = usuariosRegistrados.estrellas;
        }else{
           document.getElementById('lblProveedor').innerHTML = "Si";
            document.getElementById('lblServicio').innerHTML = usuariosRegistrados.servicio;
           document.getElementById('lblDescripcion').innerHTML = usuariosRegistrados.descripcion;
           document.getElementById('estrellas').innerHTML = usuariosRegistrados.estrellas;
          }

         sessionStorage.setItem('personaLogueada', JSON.stringify(users[i])); 
      
    
}
  }
  
    
        
   
      
  }

      
      function servCntra() {
      var usuarios = [];
      if (sessionStorage.getItem('servContratados')) {
          usuarios = JSON.parse(sessionStorage.getItem('servContratados'));  
      }
    var table = document.getElementById("servContratados_table");
    if(table!=null){table.innerHTML = null;}
    
    
      usuarios.forEach(function(usuario, index, usuarios) {
        if(usuario.servicio != ""){
      tabla(usuario)
        }
      });
    }

function tabla(usuarios) {

        var table = document.getElementById("servContratados_table");
        if(table != null){
              var row = "</td><td>"+usuarios.vendedor+"</td><td>"+usuarios.servicio+"</td><td>"+usuarios.descripcion+"</td><td>"+usuarios.fecha+"</td></tr>";
        table.innerHTML = table.innerHTML + row;
        }else{
          var row = "</td><td>"+usuarios.vendedor+"</td><td>"+usuarios.servicio+"</td><td>"+usuarios.descripcion+"</td><td>"+usuarios.fecha+"</td></tr>";
          table.innerHTML = row;
        }
        seleccionServ();
        
    }

    function servPendi() {
      var usuarios = [];
      if (sessionStorage.getItem('servContratados')) {
          usuarios = JSON.parse(sessionStorage.getItem('servContratados'));  
      }
    var table = document.getElementById("servPendientes_table");
    if(table!=null){table.innerHTML = null;}
    
      usuarios.forEach(function(usuario, index, usuarios) {
        if(usuario.terminado == "F"){
      tablaP(usuario)
        }
      });
    }

function tablaP(usuarios) {

        var table = document.getElementById("servPendientes_table");
        if(table != null){
              var row = "</td><td>"+usuarios.id+"</td><td>"+usuarios.vendedor+"</td><td>"+usuarios.servicio+"</td><td>"+usuarios.descripcion+"</td><td>"+usuarios.fecha+"</td></tr>";
        table.innerHTML = table.innerHTML + row;
        }else{
          var row = "</td><td>"+usuarios.id+"</td><td>"+usuarios.vendedor+"</td><td>"+usuarios.servicio+"</td><td>"+usuarios.descripcion+"</td><td>"+usuarios.fecha+"</td></tr>";
          table.innerHTML = row;
        }
        seleccionPend();
        
    }

    function seleccion() {
    var table = document.getElementById("servContratados_table");
     var rows = table.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        rows[i].onclick = (function() { 
            return function() {
              servicio = this.cells[0].innerHTML;
              BuscarServ();
            }    
        })(i);
    
  }

}

function BuscarServ(){

var usuarios = [];
      if (sessionStorage.getItem('servContratados')) {
          usuarios = JSON.parse(sessionStorage.getItem('servContratados'));  
      }

      usuarios.forEach(function(usuario, index, usuarios) {
        if(usuario.usuario == servicio){
            personaVendor(usuario);
        }
      });
}

 function seleccionServ() {
    var table = document.getElementById("servContratados_table");
     var rows = table.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        rows[i].onclick = (function() { 
            return function() {
               
            var id = this.cells[0].innerHTML;
           var servicio = this.cells[1].innerHTML;
           var descripcion= this.cells[2].innerHTML;
           var  fecha = this.cells[3].innerHTML;
              
              if (confirm("Esta seguro que quiere eliminar este Servicio?") == true) {
                deleteServ(id,servicio,descripcion,fecha);
} else {

  return;

}
  }  })(i);
    }
}

function seleccionPend() {
    var table = document.getElementById("servPendientes_table");
     var rows = table.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        rows[i].onclick = (function() { 
            return function() {
               
            var id = this.cells[0].innerHTML;
            var us = this.cells[1].innerHTML;
           var servicio = this.cells[2].innerHTML;
           var descripcion= this.cells[3].innerHTML;
           var  fecha = this.cells[4].innerHTML;
              
              if (confirm("Este servicio ya fue completado?") == true) {
                 
                updateServ(id);
                BuscarPersonaValorada(us);
                }
                
} 
    })(i);
    }
}

function personaValorada(pen) {
    localStorage.setItem('valorar', JSON.stringify(pen))
}

function BuscarPersonaValorada(pvalor){

var usuarios = [];
      if (localStorage.getItem('Varaditico_usuarios')) {
          usuarios = JSON.parse(localStorage.getItem('Varaditico_usuarios'));  
      }

      usuarios.forEach(function(usuario, index, usuarios) {
        if(usuario.usuario == pvalor){
            personaValorada(usuario);
        }
      });
}


function deleteServ(id,serv,des,fec){
     var servicios  = JSON.parse(sessionStorage.getItem('servContratados'));  
    
      var listaS=[];
      
     for (var i = 0; i < servicios.length; i++) {
       if((id==servicios[i].vendedor)&&(des ==servicios[i].descripcion) 
         &&(serv == servicios[i].servicio)&&(fec==servicios[i].fecha)&& (servicios[i].terminado == "Y")){

               alert("Eliminado exitoso.")

         }else if((id==servicios[i].vendedor)&&(des ==servicios[i].descripcion) 
         &&(serv == servicios[i].servicio)&&(fec==servicios[i].fecha)&& (servicios[i].terminado == "F")){
            
          listaS.push(servicios[i]);
          alert("No s puede eliminar este servicio porque no ha sido calificado")
          return;
          location.reload();
         }else{
          listaS.push(servicios[i]);
         }
        }

        sessionStorage.setItem('servContratados', JSON.stringify(listaS));
        location.reload();
          
}

function updateServ(ind){

     users = JSON.parse(sessionStorage.getItem('servContratados'));
     for (var i = 0; i < users.length; i++) {
         if(ind==users[i].id){
                 users[i].vendedor = users[i].vendedor;
                 users[i].fecha = users[i].fecha;
                 users[i].terminado = "Y";
                 users[i].descripcion = users[i].descripcion;
                 users[i].servicio = users[i].servicio;
         }
         sessionStorage.setItem('servContratados', JSON.stringify(users));
         location.href="Valorar.html";

    }    
}
      
