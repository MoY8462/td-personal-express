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

  let numeroEmpleado, idMovement;
  try {
    const body = JSON.parse(event.body);
    numeroEmpleado = body.numeroEmpleado;
    idMovement = body.idMovement;
  } catch (e) {
    return {
      statusCode: 400,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        status: "error",
        data: null,
        error: "Body inválido o parámetros faltantes."
      })
    };
  }

  // Puedes usar numeroEmpleado e idMovement para filtrar datos dinámicamente
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      status: "success",
      data: {
        id: idMovement || 1,
        nombramiento: "Profesor de Asignatura \"A\"",
        fecha: "2024-01-15T09:00:00Z",
        status: [
          {
            id: 1,
            state: "success",
            nombreMovimiento: "Propuesta Aprobada",
            fecha: "2024-01-10T10:00:00Z",
            contenido: "La propuesta de nombramiento ha sido aprobada por la coordinación"
          },
          {
            id: 2,
            state: "success",
            nombreMovimiento: "Documentación Validada",
            fecha: "2024-01-12T14:30:00Z",
            contenido: "Toda la documentación requerida ha sido validada correctamente"
          },
          {
            id: 3,
            state: "info",
            nombreMovimiento: "En proceso de firma",
            fecha: "2024-01-15T09:00:00Z",
            contenido: "El documento se encuentra en proceso de firma por las autoridades correspondientes"
          },
          {
            id: 4,
            state: "empty",
            nombreMovimiento: "Publicación",
            fecha: "",
            contenido: "Pendiente de publicación en el sistema oficial"
          }
        ]
      },
      error: null
    })
  };
};
