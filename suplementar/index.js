// faz a troca das classes do tema
const $html = document.querySelector("html");
const $checkbox = document.querySelector("#switch");
// Função para alternar o modo claro/escuro e salvar o estado no localStorage
function toggleClearMode() {
  $html.classList.toggle("Clear-Modus");
  // Armazena o estado do checkbox no localStorage
  localStorage.setItem("clearModeEnabled", $checkbox.checked);
}
// Adiciona um ouvinte de evento de mudança ao checkbox
$checkbox.addEventListener("change", toggleClearMode);
// Verifica o valor no localStorage e aplica-o ao carregar a página
if (localStorage.getItem("clearModeEnabled") === "true") {
  $checkbox.checked = true;
  $html.classList.add("Clear-Modus");
}
// Chama a função para aplicar o modo claro/escuro
toggleClearMode();

/* botao hanbunger */

const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
