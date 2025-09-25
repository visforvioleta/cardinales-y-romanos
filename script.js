// Devuelve un entero aleatorio entre min (incluido) y max (excluido)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Lista de páginas disponibles
const pages = [
  "1uno", "2dos", "3tres", "4cuatro", "5cinco", "6seis", "7siete", "8ocho", "9nueve", "10diez",
  "11once", "12doce", "13trece", "14catorce", "15quince", "16dieciseis", "17diecisiete", "18dieciocho", "19diecinueve"
];

// Obtiene el nombre del archivo actual (sin extensión .html)
const path = window.location.pathname;
// Esta lógica está bien para identificar la página actual.
const file = path.split("/").pop(); 
const number = file.slice(0, file.length - 5); 

// Filtra la página actual para no incluirla en la selección aleatoria
const pagesExcept = pages.filter(page => page !== number);

// Redirige a una página aleatoria distinta a la actual
function botonRandom() {
  const randomPage = pagesExcept[getRandomInt(0, pagesExcept.length)];
  // ✅ SOLUCIÓN: Quitamos el '/' para usar una ruta relativa.
  window.location.href = randomPage + ".html"; 
}

// Redirige a la página principal
function botonHome() {
  // ✅ SOLUCIÓN: Redirecciona al index.html, que es la página principal.
  window.location.href = "index.html"; 
}