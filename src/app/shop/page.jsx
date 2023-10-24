"use client";
import { useState } from "react";
import hamburguesasData from "../components/Data";
import Card from "../components/Card";
import FooterShop from "../components/FooterShop";
import Nav from "../components/Nav";

const Page = () => {
  const [totalPrecioEnCarrito, setTotalPrecioEnCarrito] = useState(0);
  const [hamburguesasSeleccionadas, setHamburguesasSeleccionadas] = useState(
    []
  );

  const agregarAlCarrito = (precio, nombre) => {
    // Verificar si el artículo ya está en el carrito
    const itemIndex = hamburguesasSeleccionadas.findIndex(
      (item) => item.nombre === nombre
    );

    if (itemIndex !== -1) {
      // Si el artículo ya está en el carrito, actualiza la cantidad y el precio
      const nuevasHamburguesas = [...hamburguesasSeleccionadas];
      nuevasHamburguesas[itemIndex].cantidad++;
      nuevasHamburguesas[itemIndex].subtotal =
        nuevasHamburguesas[itemIndex].cantidad * precio;

      setHamburguesasSeleccionadas(nuevasHamburguesas);
    } else {
      // Si el artículo no está en el carrito, agrégalo como un nuevo elemento
      setHamburguesasSeleccionadas([
        ...hamburguesasSeleccionadas,
        { nombre, precio, cantidad: 1, subtotal: precio },
      ]);
    }

    // Sumar el precio de la hamburguesa al precio total
    setTotalPrecioEnCarrito(totalPrecioEnCarrito + precio);
  };

  const eliminarHamburguesa = (index) => {
    // Obtener la hamburguesa a eliminar
    const hamburguesaAEliminar = hamburguesasSeleccionadas[index];

    // Restar el precio de la hamburguesa eliminada del precio total
    setTotalPrecioEnCarrito(
      totalPrecioEnCarrito - hamburguesaAEliminar.subtotal
    );

    // Eliminar la hamburguesa del carrito
    const nuevasHamburguesas = [...hamburguesasSeleccionadas];
    nuevasHamburguesas.splice(index, 1);
    setHamburguesasSeleccionadas(nuevasHamburguesas);
  };

  const deleteCarrito = () => {
    // Restablecer el carrito y el precio total
    setTotalPrecioEnCarrito(0);
    setHamburguesasSeleccionadas([]);
  };

  const realizarPedido = () => {
    let mensaje = "¡Hola! Quiero realizar el siguiente pedido:\n\n";
    console.log(hamburguesasSeleccionadas);
    if (hamburguesasSeleccionadas.length == 0) {
      alert("Su carrito esta vacio");
    } else {
      hamburguesasSeleccionadas.forEach((item) => {
        mensaje += `${item.nombre} - $${item.precio} - Cantidad: ${item.cantidad}\n`;
      });

      mensaje += `\nPrecio total: $${totalPrecioEnCarrito}`;

      const numeroWhatsapp = "3755390616"; // Reemplaza con tu número de WhatsApp
      const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(
        mensaje
      )}`;
      window.open(urlWhatsapp);
    }
  };
  return (
    <>
      <Nav />
      
      <section className="flex  items-center bg-yellow-500">
        <div className="mx-auto text-center w-4/5 md:w-9/12 mb-20 flex flex-col items-center">
          <h2 className="text-5xl text-center font-unica p-2">Hamburguesas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:justify-items-center w-6/6 gap-3">
            {hamburguesasData.map((data) => (
              <div key={data.nombre}>
                <Card
                  img={data.imagen}
                  name={data.nombre}
                  price={data.precio}
                  agregarAlCarrito={() =>
                    agregarAlCarrito(data.precio, data.nombre)
                  }
                ></Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterShop
        eliminarHamburguesa={eliminarHamburguesa}
        hamburguesas={hamburguesasSeleccionadas}
        price={totalPrecioEnCarrito}
        succes={realizarPedido}
        deleteCarrito={deleteCarrito}
      />
    </>
  );
};

export default Page;
