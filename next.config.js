module.exports = {
  // Configuración de rutas para el enrutamiento de Next.js
  async rewrites() {
    return [
      {
        source: "/old-route",
        destination: "/new-route",
      },
    ];
  },

  // Configuración de redireccionamiento de rutas
  async redirects() {
    return [
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
    ];
  },

  // Configuración de variables de entorno públicas
  env: {
    API_URL: process.env.API_URL,
  },

  // Otras configuraciones de Next.js
  // ...
};
