// next.config.js

module.exports = {
  // Configura el basePath si estás utilizando una ruta base en GitHub Pages
  basePath: "/TopOneBurgers",

  // Configura otras opciones, como webpack, redirecciones, etc.
  // Ejemplo:
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   // Haz configuraciones específicas de Webpack aquí
  //   return config;
  // },

  // Agrega encabezados de seguridad a tus respuestas
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // Puedes configurar otras opciones según tus necesidades
};
