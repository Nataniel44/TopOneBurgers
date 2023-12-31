"use client";
import { motion } from "framer-motion";
import Header from "./Header";
import Image from "next/image";
import Link from "next/link";
const Main = () => {
  return (
    <>
      <header className="bg-yellow-500 vh-91 shadow-lg flex items-center justify-center flex-col w-full md:w-9/12  mx-auto">
        <article className="flex flex-col justify-center items-center gap-5">
          <figure className="flex justify-center">
            <img
              src="./img-redux/33.png
            "
              className="wd rounded-full"
              alt=""
            />
          </figure>

          <aside className="flex items-center">
            <h1 className=" text-4xl md:text-5xl text-center font-light ">
              Top One Burger&#39;s
            </h1>
          </aside>
        </article>

        <section className="p-6">
          <Link
            href="/shop"
            className="bg-red-600 text-white rounded-full p-2 pr-3 pl-3  text-md shadow-md"
          >
            Comprar ahora!
          </Link>
        </section>
      </header>
    </>
  );
};

export default Main;
