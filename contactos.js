// Objeto para almacenar contactos
const agenda = [];

//Función para crear un contacto nuevo
function crearContacto(id, nombres, apellidos, telefono, ubicaciones) {
  const contacto = { id, nombres, apellidos, telefono, ubicaciones };
  agenda.push(contacto);
}

crearContacto(1, "Liz", "Espinosa", "3132720168", {
  ciudad: "Tuluá",
  direccion: "Calle 11 #23-58"
});

crearContacto(2, "Sara", "Giraldo", "3186573947", [
  {
    ciudad: "Cartagena",
    direccion: "Calle 15 #28-40"
  }
]);

crearContacto(3, "María", "Castañeda", "3150573457", [
  {
    ciudad: "Cali",
    direccion: "Calle 15 #28-56"
  }
]);

crearContacto(4, "Alejandro", "Carrillo", "3205674321", [
  {
    ciudad: "Manizales",
    direccion: "Calle 88 #34-09"
  }
]);

console.log("Agenda después de crear contactos:");
console.log(agenda);

//Función para eliminar un contacto por su id
function eliminarContacto(id) {
  const indice = agenda.findIndex(contacto => contacto.id === id);
  if (indice !== -1) {
    agenda.splice(indice, 1);
    console.log(`Contacto con ID ${id} eliminado.`);
  } else {
    console.log(`No se encontró un contacto con ID ${id}.`);
  }
}

eliminarContacto(4);

console.log("Agenda después de eliminar un contacto:");
console.log(agenda);

//Función para actualizar contacto
function actualizarContacto(id, nuevosDatos) {
  const contactoExistente = agenda.find((contacto) => contacto.id === id);

  if (!contactoExistente) {
    console.log(`No se encontró un contacto con ID ${id}.`);
    return;
  }

  // Actualiza los campos del contacto existente con los nuevos datos
  Object.assign(contactoExistente, nuevosDatos);
  console.log(`Contacto con ID ${id} actualizado.`);
}

actualizarContacto(2, {
  apellidos: "Escobar Sánchez",
  telefono: "3137769045"
});

console.log("Agenda después de actualizar el contacto:");
console.log(agenda);
