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

  function validarFormularioContacto() {
    // validacion de nombre
    let nombre = document.getElementById("nombreContacto").value.trim();
      
   

    // Verificar si el nombre contiene solo caracteres alfabéticos y espacios
    for (var i = 0; i < nombre.length; i++) {
      var charCode = nombre.charCodeAt(i);
      if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
        alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
        return false;
      }
    }
     // validacion de mail
    let email = document.getElementById("emailContacto").value.trim();
    let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  
    if( ! validEmail.test(email) ){
      alert('Email invalido, complete un email valido antes de continuar');
      return false;
    }
    
    // Si todas las validaciones son exitosas, enviar el formulario
    alert("Formulario enviado correctamente.");
    return true;
  }
