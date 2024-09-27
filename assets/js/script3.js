let boton = document.getElementById("boton");
const imprimir = document.getElementById("imprimir");

boton.addEventListener("click", () => {
  let primero = parseInt(document.getElementById("primero").value);
  let segundo = parseInt(document.getElementById("segundo").value);
  let tercero = parseInt(document.getElementById("tercero").value);
  if (primero === 9 && segundo === 1 && tercero === 1) {
    imprimir.innerText = "Password 1 correcto";
  } else if (primero === 7 && segundo === 1 && tercero === 4) {
    imprimir.innerText = "Password 2 es correcto";
  } else {
    imprimir.innerText = "Password incorrecto";
  }
});
