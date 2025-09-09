exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      status: "success",
      data: [
        {
          id: "1",
          imagen: "https://example.com/image1.jpg",
          link: "https://example.com/news1"
        },
        {
          id: "2",
          imagen: "https://example.com/image2.jpg",
          link: "https://example.com/news2"
        },
        {
          id: "3",
          imagen: "https://example.com/image3.jpg",
          link: "https://example.com/news3"
        }
      ],
      error: null
    })
  };
};