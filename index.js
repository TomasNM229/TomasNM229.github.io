function mostrarSiguienteCartilla() {
    var cartillaForm = document.getElementById("cartillaForm");
    var cartillasSiguientes = document.getElementById("cartillasSiguientes");

    if (cartillaForm.distancia.value) {
      cartillasSiguientes.style.display = "block";
    } else {
      alert("Selecciona una opción primero.");
    }
  }

  function mostrarResultado() {
    var cartillasSiguientes = document.getElementById("cartillasSiguientes");
    var resultado = document.getElementById("resultado");
    var resultadoTexto = document.getElementById("resultadoTexto");

    if (cartillasSiguientes.estilo.value) {
      var distancia = document.querySelector('input[name="distancia"]:checked').value;
      var estilo = document.querySelector('input[name="estilo"]:checked').value;

      resultadoTexto.textContent = "Estás " + distancia + " y eres " + estilo + ".";
      resultado.style.display = "block";
    } else {
      alert("Selecciona un estilo primero.");
    }
}