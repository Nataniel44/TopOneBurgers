// next.config.js
module.exports = {
  // Otras configuraciones...
  target: "experimental-serverless-trace",
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    loader: "imgix",
    path: "",
  },
  // Agrega esta línea para habilitar la exportación estática
  output: "out",
};
