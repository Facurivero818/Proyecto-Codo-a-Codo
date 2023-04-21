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