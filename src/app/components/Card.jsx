import Link from "next/link";
const Card = ({ img, name, price, agregarAlCarrito }) => {
  return (
    <section className="bg-black flex items-center justify-between pl-3 md:p-0  md:flex-col md:w-56 rounded-lg p-2 shadow-lg shadow-black ">
      <article className=" ">
        <img
          src={img}
          className="w-32 h-32 md:w-56 md:h-56 object-cover rounded-lg md:rounded-t-lg md:rounded-b-none "
          alt=""
        />
      </article>
      <article className="md:w-56 flex flex-col  md:items-end text-white text-md  gap-2 p-2">
        <div className="flex flex-col md:items-end items-center">
          <h3 className="text-end">{name}</h3>
          <span className="">$ {price}</span>
        </div>
        <button
          onClick={agregarAlCarrito}
          className="bg-red-700 text-white rounded-full p-1  text-sm shadow-md"
        >
          Agregar al carrito
        </button>
      </article>
    </section>
  );
};

export default Card;
