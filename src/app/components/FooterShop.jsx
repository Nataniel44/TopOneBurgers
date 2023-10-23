import { motion } from "framer-motion";
import { useNavbar } from "./NavbarContext";
import { useState } from "react";

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

  return (
    <div>
      <motion.div
        className={`menu footer ${
          isOpen ? "open" : ""
        } shadow border border-yellow-400 border-4`}
        initial={{ y: 550 }}
        animate={{ y: isOpen ? 0 : 365 }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.1 }}
      >
        <div className="text-center m-2 flex items-center justify-between ps-3 pe-3">
          <span className="font-sans text text-lg flex items-center justify-center gap-2 wd ">
            Total: ${price}
          </span>

          <button
            className="button1 bg-black rounded-full p-2 pr-6 pl-6 pb-3 md:pr-3 md:pl-3 text-sm shadow-md text "
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
          <div className="text-lg md:text-lg text wd">
            <button
              onClick={succes}
              className="bg-green-700 text-white rounded-full p-2 pr-3 pl-3 text-sm shadow-md"
            >
              Realizar pedido
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end gap-1">
          <div>
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
          <div className="font-bold text-lg">Precio: ${price}</div>

          <div className="flex gap-2">
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
