
addEventListener("load",load);

/*var servidor = "http://localhost:666";*/
var servidor= "https://tiendapiaedi.herokuapp.com/";

  /*function $valor(valor){
        return document.getElementById(valor);
    }*/
function validarPassword(){
    var pass = document.getElementById('clave').value;
    var error = document.getElementById('errorPass').value;
    regex = /^(?=.*\d).*[A-ZÁÉÍÓÚÜÑ]/;

    
    if (regex.test(pass)) {
        document.getElementById('errorPass').innerHTML = "usuario valido";
    } else {
        document.getElementById('errorPass').innerHTML = "La contraseña debe contener una mayúscula y un número";
    }   
}

function validarVacio(){
        var nombre = document.getElementById("usuario").value
        var clave= document.getElementById("clave").value;

        if(nombre===""){
                document.getElementById("usuario").style.borderColor= "red";
               document.getElementById("usuarioVacio").innerHTML= " Debe Ingresar Usuario";
        }

        if(clave===""){
            document.getElementById("clave").style.borderColor= "red";
         document.getElementById("claveVacia").innerHTML= " Debe Ingresar Clave";
          }
          else{
             document.getElementById("clave").style.borderColor = "black";
             document.getElementById("claveVacia").innerHTML = "";
    }
    

}

function mostrarMail(){
   document.getElementById("mail").style.display = "block";
   document.getElementById("btnEnviar").style.display = "block";

}

function ocultar(){
    document.getElementById("btnInicio").style.display = "none";
}

function load(){
    
    enviarRespuesta(servidor,envioMensaje);

    document.getElementById("btnInicio").addEventListener("click",respuestaClick);
   
} 

function envioMensaje(){
    enviarRespuesta(servidor,validarPassword);
    enviarRespuesta(servidor,validarVacio);
   
}

  function  inicioSesion(){
      enviarPost();
      
  }

function respuestaClick(respuesta){
  return respuesta;
}

function enviarRespuesta(servidor,funcionArealizar){
    
    //creo el objeto
    var xmlhttp = new XMLHttpRequest();
     //indico hacia donde va el mensaje
     xmlhttp.open("GET",servidor +"/hello/yo",true);
    //seteo el evento
    xmlhttp.onreadystatechange=function(){
        //veo si llega la respuesta la servidor
        if(xmlhttp.readyState== XMLHttpRequest.DONE){
            //reviso si la respuesta es correcta
            if(xmlhttp.status==200){
                funcionArealizar(xmlhttp.responseText);
            }
            else{
                alert("ocurrio un error");
            }
        }
    }
   
    //envio respuesta
    xmlhttp.send();
}

 

  function enviarPost(){
        //creo el objeto
    var xmlhttp = new XMLHttpRequest();
    
     //indico hacia donde va el mensaje
     xmlhttp.open("POST",servidor+'/usuario/login',true);
    //seteo el evento
    xmlhttp.onreadystatechange=function(){
        //veo si llega la respuesta la servidor
        if(xmlhttp.readyState== XMLHttpRequest.DONE){
            //reviso si la respuesta es correcta
            if(xmlhttp.status==200){
               
                alert(xmlhttp.responseText);
                window.location.href="inicio.html";
            }
            else{
                alert("ocurrio un error");
            }
        }
    }
       
    var datos = new FormData();
    datos.append('usuario',document.getElementById("usuario").value);
    datos.append('clave',document.getElementById("clave").value);
    
    //envio respuesta
    xmlhttp.send(datos);
    
}

function enviarDatos(){
    var xmlhttp = new XMLHttpRequest();
    
    //indico hacia donde va el mensaje
    xmlhttp.open("POST",servidor+'/usuario/registro',true);
   //seteo el evento
   xmlhttp.onreadystatechange=function(){
       //veo si llega la respuesta la servidor
       if(xmlhttp.readyState== XMLHttpRequest.DONE){ 
           //reviso si la respuesta es correcta
           if(xmlhttp.status==200){
              
               alert(xmlhttp.responseText);
               
           }
           else{
               alert("ocurrio un error");
           }
       }
   }
      
   var datos = new FormData();
   datos.append('usuario',document.getElementById("usuario").value);
   datos.append('mail',document.getElementById("mail").value);
   datos.append('clave',document.getElementById("clave").value);
   
   //envio respuesta
   xmlhttp.send(datos);
   
}



