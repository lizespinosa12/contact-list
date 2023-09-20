var listaDeContactos = ["Leticia López", "Adriana Gallego", "Martín Caballero" , "Carlos Jaramillo"];

function agregarContacto(nombreCompleto) {
  listaDeContactos.push(nombreCompleto);
}

agregarContacto("Clara Pérez");

function borrarContacto(nombreCompleto) {
  var indice = listaDeContactos.indexOf(nombreCompleto);
  if (indice !== -1) {
    listaDeContactos.splice(indice, 1); // Eliminar un elemento en el índice encontrado
    console.log(nombreCompleto + " ha sido eliminado de la lista de contactos.");
  } else {
    console.log(nombreCompleto + " no se encontró en la lista de contactos.");
  }
}

borrarContacto("Adriana Gallego");

function mostrarContactos() {
  console.log("Lista de Contactos:");
  for (var i = 0; i < listaDeContactos.length; i++) {
    console.log((i + 1) + ". " + listaDeContactos[i]);
  }
}
