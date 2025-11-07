const moviles = [
  { nombre: "Sony Ericsson T630", imagen: "sony_ericsson_T630_frontal.jpg" },
  { nombre: "Nokia 6600", imagen: "IMG_20251107_175022.jpg" },
  { nombre: "Motorola V3", imagen: "IMG_20251107_183038.jpg" },
  // Puedes añadir más líneas así con tus fotos 👇
  // { nombre: "Nokia N95", imagen: "nombre_de_archivo.jpg" },
];

const galeria = document.getElementById("galeria");
const busqueda = document.getElementById("busqueda");

function mostrarMoviles(lista) {
  galeria.innerHTML = "";
  lista.forEach(movil => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <img src="${movil.imagen}" alt="${movil.nombre}">
      <h3>${movil.nombre}</h3>
    `;
    galeria.appendChild(div);
  });
}

busqueda.addEventListener("input", () => {
  const texto = busqueda.value.toLowerCase();
  const filtrados = moviles.filter(m => m.nombre.toLowerCase().includes(texto));
  mostrarMoviles(filtrados);
});

mostrarMoviles(moviles);
