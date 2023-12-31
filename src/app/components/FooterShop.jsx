import { motion } from "framer-motion";
import { useNavbar } from "./NavbarContext";
import { useState, useEffect } from "react";

const FooterShop = ({
  price,
  deleteCarrito,
  hamburguesas,
  eliminarHamburguesa,
  succes,
}) => {
  const { isNavbarVisible } = useNavbar();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const closeFooter = () => {
      setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("click", closeFooter);
    } else {
      document.removeEventListener("click", closeFooter);
    }

    return () => {
      document.removeEventListener("click", closeFooter);
    };
  }, [isOpen]);

  return (
    <div>
      <motion.div
        className={`menu footer ${
          isOpen ? "open" : ""
        } shadow border border-yellow-400 border-2`}
        initial={{ y: 550 }}
        animate={{ y: isOpen ? 1 : 390 }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.1 }}
      >
        <div className="text-center m-2 flex items-center justify-between  ">
          <span className="text-sm text bg-yellow-500 rounded-full p-2 pr-5 pl-5 w-86">
            Total: ${price}
          </span>

          <button
            className="button1 bg-black rounded-full p-2 pr-6 pl-6 pb-3 md:pr-3 md:pl-3 text-sm shadow-md text m-1"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <div className="font-light text-md text-white md:flex gap-1">
                ↓ <span className="hidden md:flex">Cerrar menú</span>
              </div>
            ) : (
              <div className="font-light text-md text-white md:flex gap-1">
                <span className="hidden md:flex">Abrir menú</span> ↑
              </div>
            )}
          </button>

          <button
            onClick={succes}
            className="bg-green-700 text-white rounded-full p-2 pr-3 pl-3 text-sm shadow-md"
          >
            Realizar pedido
          </button>
        </div>

        <div className="flex flex-col items-center justify-end gap-1 bg-neutral-800 height-footer rounded-3xl pb-3">
          <div className=" ">
            <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 md:justify-items-center w-6/6 gap-3 p-3">
              {hamburguesas.map((hamburguesa, index) => (
                <div
                  key={index}
                  className="flex flex-re md:flex-row items-center gap-3 bg-black text-white p-2 rounded-md"
                >
                  <div className="w-44">
                    <div>
                      {hamburguesa.nombre} x{hamburguesa.cantidad}
                    </div>
                    <div>${hamburguesa.precio}</div>
                  </div>
                  <div>
                    <button
                      className="bg-red-700 text-white rounded-full p-1 text-sm shadow-md"
                      onClick={() => eliminarHamburguesa(index)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </ul>
          </div>
          <div className="font-light text-lg text-white">Precio: ${price}</div>

          <div className="flex ">
            <div>
              <button
                onClick={deleteCarrito}
                className="bg-red-700 text-white rounded-full p-2 pr-3 pl-3 text-sm shadow-md"
              >
                Vaciar
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FooterShop;
