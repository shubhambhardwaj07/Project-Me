import React from "react";
import { motion } from "framer-motion";
import styles from "./HomeArt.module.css";
import Image from "next/image";

export const HomeArt = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.imageContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Image
          width={1200}
          height={1200}
          src="/images/shubh3.png"
          alt="Shubham Bhardwaj"
          className={styles.photo}
        />
      </motion.div>
      <motion.div
        className={styles.textContainer}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1 className={styles.name}>Shubham Bhardwaj</h1>
        <p className={styles.title}>Frontend Developer</p>
        <p className={styles.description}>
          Crafting elegant and efficient user interfaces with a focus on modern
          web technologies.
        </p>
      </motion.div>
    </div>
  );
};
