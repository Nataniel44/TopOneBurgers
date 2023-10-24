// next.config.js
module.exports = {
  // Otras configuraciones...

  reactStrictMode: true,
  trailingSlash: true,
  images: {
    loader: "imgix",
    path: "",
  },
  // Agrega esta línea para habilitar la exportación estática
  output: "out",
};
