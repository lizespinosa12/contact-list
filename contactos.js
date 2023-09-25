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

eliminarContacto(1);

console.log("Agenda después de eliminar un contacto:");
console.log(agenda);
