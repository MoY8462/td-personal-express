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

  let empleado;
  try {
    const body = JSON.parse(event.body);
    empleado = body.numeroEmpleado;
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

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      status: "success",
      data: {
        items: [
          {
            id: 1,
            empleado: empleado || 123456,
            nombramiento: "Profesor de Asignatura \"A\"",
            tipoMovimiento: "alta",
            nombreMovimiento: "Nuevo Nombramiento",
            fecha: "2024-01-15T09:00:00Z",
            estatus: 0
          },
          {
            id: 2,
            empleado: empleado || 123456,
            nombramiento: "Ayudante de Profesor de Asignatura \"A\"",
            tipoMovimiento: "baja",
            nombreMovimiento: "Terminación de Nombramiento",
            fecha: "2024-02-01T17:00:00Z",
            estatus: 3
          },
          {
            id: 3,
            empleado: empleado || 123456,
            nombramiento: "Profesor de Tiempo Completo",
            tipoMovimiento: "alta",
            nombreMovimiento: "Prórroga",
            fecha: "2024-03-01T08:30:00Z",
            estatus: 1
          }
        ]
      },
      error: null
    })
  };
};
