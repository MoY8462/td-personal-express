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

  // Aquí podrías usar numeroEmpleado para filtrar datos dinámicamente
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      status: "success",
      data: [
        {
          nombramiento: "Profesor de Asignatura \"A\"",
          documentos: [
            {
              id: "doc_001",
              name: "Nombramiento_2024",
              downloadURL: "https://api.example.com/documents/download/doc_001",
              documentType: 1,
              fecha: "15-01-2024"
            },
            {
              id: "doc_002",
              name: "Contrato_Servicios",
              downloadURL: "https://api.example.com/documents/download/doc_002",
              documentType: 1,
              fecha: "20-01-2024"
            },
            {
              id: "doc_003",
              name: "Reporte_Actividades",
              downloadURL: "https://api.example.com/documents/download/doc_003",
              documentType: 2,
              fecha: "28-01-2024"
            }
          ]
        },
        {
          nombramiento: "Ayudante de Profesor",
          documentos: [
            {
              id: "doc_004",
              name: "Carta_Terminacion",
              downloadURL: "https://api.example.com/documents/download/doc_004",
              documentType: 3,
              fecha: "01-02-2024"
            }
          ]
        }
      ],
      error: null
    })
  };
};
