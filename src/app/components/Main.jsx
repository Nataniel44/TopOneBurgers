"use client";
import { motion } from "framer-motion";
import Header from "./Header";
import Image from "next/image";
const Main = () => {
  return (
    <>
      <main className="h-screen  flex items-center justify-center flex-col">
        <motion.section
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center gap-5"
        >
          <div className="flex flex-col justify-center items-center gap-5">
            <Image
              src="./img-redux/33.png"
              className="rounded-full w-48  md:w-2/12  border-yellow-400 border-4 shadow-md"
              alt=""
            />

            <div className="flex items-center">
              <h1 className=" text-4xl md:text-5xl text-center font-normal text">
                Top One Burgers
              </h1>
            </div>
          </div>
        </motion.section>
        <Header />
      </main>
    </>
  );
};

export default Main;
