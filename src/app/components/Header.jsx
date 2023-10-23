"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <section className="mt-5 p-5 rounded-xl bg-amber-600 text-center flex items-center justify-center flex-col shadow-md border border-yellow-400 border-4">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className=" "
        >
          <h2 className="md:text-4xl mb-3 text-4xl font-sans text">
            ¡Ordena yá!
          </h2>
        </motion.div>
        <article>
          <div className="mt-3 ">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center gap-3 "
            >
              <Link
                href="/shop"
                className="bg-red-700 text-white rounded-full p-2 pr-3 pl-3 text-md shadow-md"
              >
                Ordenar con delivery
              </Link>
              <Link
                href="/shop"
                className="bg-black text-white rounded-full p-2 pr-3 pl-3  text-md shadow-md"
              >
                Ordenar sin delivey
              </Link>
            </motion.div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Header;
