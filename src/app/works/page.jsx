"use client";

const page = () => {
  const trabajos = [
    {
      title: "Ceferino Hotel",
      description: "Pagina de reservas para hotel.",
      imageUrl: "img/ceferino.png", // Reemplaza con la ruta de tu imagen
      link: "https://nataniel44.github.io/hotel-ceferino/", // Enlace a la página del proyecto 1
    },
    {
      title: "Instituto Mundo Informatica",
      description: "Sitio web de instituto.",
      imageUrl: "img/mundo.png", // Reemplaza con la ruta de tu imagen
      link: "https://mundo-infor.web.app/Mundo-infor/", // Enlace a la página del proyecto 2
    },
    {
      title: "Top One Burgers",
      description: "Venta de comidas online.",
      imageUrl: "/img/top.png", // Reemplaza con la ruta de tu imagen
      link: "https://nataniel44.github.io/TopOne/", // Enlace a la página del proyecto 2
    },

    // Agrega más proyectos según sea necesario
  ];
  return (
    <>
      <section className="bg-black lg:h-screen flex items-center">
        <div className="container mx-auto text-center w-4/5 md:w-9/12">
          <h2 className="text-5xl font-semibold mt-8 mb-8 text-white text">
            Mis Trabajos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trabajos.map((trabajo, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg text-black"
              >
                <img
                  src={trabajo.imageUrl}
                  alt={trabajo.title}
                  className="w-full h-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{trabajo.title}</h3>
                <p className="text-gray-600 mb-4">{trabajo.description}</p>
                <a
                  href={trabajo.link}
                  className="text-blue-500 hover:underline"
                >
                  Ver más
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
