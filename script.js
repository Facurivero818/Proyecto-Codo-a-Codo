let idaYVuelta = document.querySelector(".formulary__boxcheck__idaYVuelta");
let ida = document.querySelector(".formulary__boxcheck__ida");
let regreso = document.querySelector(".formulary__boxdate__hide");

regreso.style.display = "none";

idaYVuelta.addEventListener("change", () => {
  if (idaYVuelta.checked) {
    regreso.style.display = "block";
  } else {
    regreso.style.display = "none";
  }
});

ida.addEventListener("change", () => {
    if (ida.checked) {
      regreso.style.display = "none";
    } else {
      regreso.style.display = "block";
    }
  });

  //PEDIR DATOS A API
  const datos = async ()=>{
    //SI PONES EL LINK EN EL NAVEGADOR TE TIRA EL JSON CON LOS DATOS
    let info = await fetch('https://api.metar-taf.com/airports?api_key=Pg0Po77LflNg7F0dsbpX9lvDyS94pGTB',
    {mode: 'no-cors',//SI COLOCO CORS, ME TIRA EL ERROR. Y DE ESTA FORMA NO TRAE LOS DATOS
    headers: {'Content-Type': "aplication/json"}});
    let resultado = await info.json();
    console.log(resultado);
  };
  datos()


























// VALIDACION FORMULARIO

const form = document.querySelector('.contendorFormularioContacto');

form.addEventListener("submit", (e)=>{
  
e.preventDefault();
const nombre = document.getElementById('nombre').value;
const email = document.getElementById('email').value;
const mensaje = document.getElementById('mensaje').value;

// Verificar si algún campo está en blanco
if (nombre === "" || email === "" || mensaje === "") {
  alert("Por favor, complete todos los campos del formulario.");
  return false;
}
// Verificar si el nombre contiene solo caracteres alfabéticos y espacios
for (var i = 0; i < nombre.length; i++) {
  var charCode = nombre.charCodeAt(i);
  if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
    alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
    return false;
  }
}

//VALIDAR MAIL  
let arroba = false;
let nomUsuario = true;
for (letra of email) {
  if(letra === '@'){
    arroba = true;
    break;
  }
  // VERIFICO QUE SOLO SE INGRESEN NUMEROS, LETRAS O PUNTO ANTES DEL @
  else if (!((letra.charCodeAt(0) >= 65 && letra.charCodeAt(0) <= 90) 
  || (letra.charCodeAt(0) >= 97 && letra.charCodeAt(0) <= 122) 
  || (letra.charCodeAt(0) >= 48 && letra.charCodeAt(0) <= 57) 
  || letra.charCodeAt(0) === 46)){
    nomUsuario = false;
  }
}//SI NO HAY @ ENVIO UN ALERT
if(arroba==false){
  alert('Debe colocar el @');
  return false;
}//SI NO HAY SOLO LETRAS, NUMEROS O PUNTOS ANTES DEL @ ENVIO UN ALERT
if(arroba == true && nomUsuario==false){
  alert('Solo se aceptan letras, numeros y puntos antes del @')
  return false;
} 

//VERIFICO QUE AL FINAL SE COLOQUE UN .COM
let finalCad = email.substring(email.length-4);
    
if (finalCad !== '.com'){
  alert('Debe ingresar .com al final del email');
  return false;   
}

alert('Formulario enviado correctamente');
return true;
});
