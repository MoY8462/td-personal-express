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

  // Aquí podrías usar numeroEmpleado para filtrar notificaciones dinámicamente
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      status: "success",
      data: [
        {
          id: 1,
          title: "Nuevo Nombramiento Disponible",
          content: "Se ha generado un nuevo nombramiento para el período 2024-2. Favor de revisar la documentación correspondiente.",
          fecha: "2024-01-30",
          leida: false
        },
        {
          id: 2,
          title: "Documentación Pendiente",
          content: "Recuerda entregar la documentación faltante para completar tu expediente. Fecha límite: 15 de febrero.",
          fecha: "2024-01-25",
          leida: true
        },
        {
          id: 3,
          title: "Próximo Pago",
          content: "Tu próximo pago está programado para el 28 de febrero de 2024. Verifica que tus datos bancarios estén actualizados.",
          fecha: "2024-01-20",
          leida: false
        }
      ],
      error: null
    })
  };
};
