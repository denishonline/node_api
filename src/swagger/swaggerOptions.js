const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "PMS",
      description: "Portfolio Management Service",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/*.js"], // Path to the API routes containing JSDoc comments
}

module.exports = swaggerOptions
