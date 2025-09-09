exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nombre: "MoY8462",
      proyecto: "api-json",
      mensaje: "¡Hola desde Netlify!"
    })
  };
};