let mensaje = document.querySelector(".mensaje");

validacion.addEventListener("click", () => {
  let sticker1 = parseInt(document.getElementById("sticker1").value);
  let sticker2 = parseInt(document.getElementById("sticker2").value);
  let sticker3 = parseInt(document.getElementById("sticker3").value);
  let validacion = document.getElementById("validacion");
  let suma = sticker1 + sticker2 + sticker3;
  if (suma > 10) {
    mensaje.innerHTML = "Llevas demasiados Stickers";
  } else {
    mensaje.innerHTML = "Llevas " + suma + " Stickers";
  }
});
