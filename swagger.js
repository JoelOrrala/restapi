const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "REST API",
    description: "REST API with Express and Firestore",
  },
  host: "restapi-rjmk.onrender.com",
  basePath: "/api",
  "schemes": [
     "https"
   ],
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./routes/*.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
