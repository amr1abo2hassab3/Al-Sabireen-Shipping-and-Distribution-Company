"use client";
import { motion } from "framer-motion";

export default function TextLanding({
  keyIndex,
  title,
  description,
}: {
  keyIndex: number;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      key={keyIndex}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute inset-0 flex flex-col items-center justify-center top-1/2"
    >
      <h2 className="p-5 px-7 rounded text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-main-color bg-white font-bold text-center shadow-lg">
        {title}
      </h2>
      <h3 className="p-5 px-7 rounded text-lg md:text-xl lg:text-2xl xl:text-3xl bg-white font-bold text-center shadow-lg mt-2">
        {description}
      </h3>
    </motion.div>
  );
}
