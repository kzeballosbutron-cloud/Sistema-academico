const usuarios = [
  { nombre: "Brandon Saire", correo: "brandon_saire@usb.bo" },
  { nombre: "Kleber Paco", correo: "kleber_paco@usb.bo" },
  { nombre: "Aracely Alvarez", correo: "aracely_alvarez@usb.bo" },
  { nombre: "Kevin Zeballos", correo: "kevin_zeballos@usb.bo" },
  { nombre: "Edmar Quispe", correo: "edmar_quispe@usb.bo" },
  { nombre: "Silverio Ramos", correo: "silverio_ramos@usb.bo" },
  { nombre: "Lizeth Mamani", correo: "lizeth_mamani@usb.bo" },
  { nombre: "Paul Quispe", correo: "paul_quise@usb.bo" },
  { nombre: "Misael Marca", correo: "misael_marca@usb.bo" },
  { nombre: "Alan Valencia", correo: "alan_valencia@usb.bo" },
  { nombre: "Jesus Coillo", correo: "jesus_coillo@usb.bo" },
  { nombre: "Niuton Vilca", correo: "niuton_vilca@usb.bo" }
];

const loginView = document.getElementById("loginView");
const appView = document.getElementById("appView");
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");
const usersBody = document.getElementById("usersBody");
const searchInput = document.getElementById("searchInput");

function mostrarUsuarios(lista = usuarios) {
  usersBody.innerHTML = "";

  lista.forEach((usuario, index) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${index + 1}</td>
      <td>${usuario.nombre}</td>
      <td>${usuario.correo}</td>
      <td>••••••••</td>
    `;

    usersBody.appendChild(fila);
  });
}

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const correo = document.getElementById("correo").value.trim();
  const contrasena = document.getElementById("contrasena").value;

  if (correo === "admin@usb.bo" && contrasena === "Admin2026!") {
    loginView.classList.add("hidden");
    appView.classList.remove("hidden");
    loginMessage.textContent = "";

    mostrarUsuarios();

    document.getElementById("today").textContent =
      new Date().toLocaleDateString("es-BO", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });
  } else {
    loginMessage.textContent =
      "Usuario o contraseña incorrectos.";
  }
});

document.getElementById("logoutBtn").addEventListener("click", function() {
  appView.classList.add("hidden");
  loginView.classList.remove("hidden");
  loginForm.reset();
});

searchInput.addEventListener("input", function() {
  const texto = this.value.toLowerCase();

  const filtrados = usuarios.filter(usuario =>
    usuario.nombre.toLowerCase().includes(texto) ||
    usuario.correo.toLowerCase().includes(texto)
  );

  mostrarUsuarios(filtrados);
});
