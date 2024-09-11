import React from "react";
import { motion } from "framer-motion";
import styles from "./InitialLoader.module.css";

export const InitialLoader = () => {
  const messages = ["स्वागत है", "आपका दिन शुभ हो", "खुश रहो"]; // Example messages in Hindi

  return (
    <div className={styles.loadingContainer}>
      <motion.div
        className={styles.name}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        शुभ
      </motion.div>

      <div className={styles.messages}>
        {messages.map((message, index) => (
          <motion.div
            key={index}
            className={styles.message}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 1.5 }}
          >
            {message}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
