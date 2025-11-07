const moviles = [
  {
    nombre: "LG KU990i",
    imagenes: [
      "lg_ku990_frontal.jpg",
      "lg_ku990_camara.jpg",
      "lg_ku990_camara_alto.jpg"
    ]
  },
  {
    nombre: "LG KF700",
    imagenes: [
      "lg_kf700_frontal.jpg",
      "lg_kf700_teclado.jpg",
      "lg_kf700_trasero.jpg"
    ]
  },
  {
    nombre: "Nokia 3210",
    imagenes: [
      "nokia_3210_frontal.jpg",
      "nokia_3210_trasero.jpg"
    ]
  },
  {
    nombre: "Nokia N85",
    imagenes: [
      "nokia_n85_frontal.jpg"
    ]
  },
  {
    nombre: "Nokia N95",
    imagenes: [
      "nokia_n95_frontal.jpg",
      "nokia_n95_teclado.jpg",
      "nokia_n95_teclasmusica.jpg",
      "nokia_n95_trasero.jpg"
    ]
  },
  {
    nombre: "Sony Ericsson T630",
    imagenes: [
      "sony_ericsson_t630_frontal.jpg",
      "sony_ericsson_t630_trasero.jpg"
    ]
  }
];

const galeria = document.getElementById("galeria");
const busqueda = document.getElementById("busqueda");

function mostrarMoviles(lista) {
  galeria.innerHTML = "";
  lista.forEach(movil => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${movil.nombre}</h3>
      ${movil.imagenes.map(img => `<img src="${img}" alt="${movil.nombre}">`).join("")}
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
