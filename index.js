let numUnoInput = document.getElementById("numUno");
let numDosInput = document.getElementById("numDos");
let sumarButton = document.getElementById("sumar");

sumarButton.addEventListener("click", function() {
    let numUno = parseFloat(numUnoInput.value);
    let numDos = parseFloat(numDosInput.value);

    if (!isNaN(numUno) && !isNaN(numDos)) {
        const resultado = numUno - numDos;
        alert(`El resultado de la suma es: ${resultado}`);
    } else {
        alert("Por favor, ingrese números válidos en ambos campos.");
    }
});
