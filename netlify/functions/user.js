exports.handler = async function(event, context) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        status: "error",
        data: null,
        error: "Método no permitido. Usa POST."
      })
    };
  }

  let numeroEmpleado;
  try {
    const body = JSON.parse(event.body);
    numeroEmpleado = body.numeroEmpleado;
  } catch (e) {
    return {
      statusCode: 400,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        status: "error",
        data: null,
        error: "Body inválido o parámetro faltante."
      })
    };
  }

  // Aquí podrías usar numeroEmpleado para buscar datos dinámicamente
  // Por ahora, se devuelve el mismo objeto con el campo numeroEmpleado
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      status: "success",
      data: {
        numeroEmpleado: numeroEmpleado,
        nombre: "Juan Pérez González",
        rfc: "JUAP850101HDFRRL01",
        telefono: "5551234567",
        correo: "juan.perez@institucion.edu.mx",
        imagen: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
      },
      error: null
    })
  };
};
