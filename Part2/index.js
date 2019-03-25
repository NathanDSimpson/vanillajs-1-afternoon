let idInput = document.getElementById('idInput');
let colorInput = document.getElementById('colorInput');

function setCard() {
    console.log(idInput.value)
  let card = document.getElementById(idInput.value);
  card.style.color = colorInput.value;
}