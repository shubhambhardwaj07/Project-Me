import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Hamburger.module.css";

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <motion.div
          className={styles.line}
          style={{ backgroundColor: isOpen ? "white" : "black" }} // Color transition
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
          transition={{ duration: 0.5, ease: [0.68, -0.55, 0.27, 1.55] }}
        />
        <motion.div
          className={styles.line}
          style={{ backgroundColor: isOpen ? "white" : "black" }} // Color transition
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
          transition={{ duration: 0.5, ease: [0.68, -0.55, 0.27, 1.55] }}
        />
      </div>

      {/* Sliding Menu */}
      <motion.div
        className={styles.menu}
        initial={{ transform: "translateX(100%)" }} // Start off-screen to the right
        animate={{ transform: isOpen ? "translateX(0%)" : "translateX(100%)" }} // Slide in and out from the right
        transition={{ duration: 0.8, ease: [0.68, -0.55, 0.27, 1.55] }} // Smooth cubic-bezier transition
      >
        <motion.ul className={styles.menuItems}>
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={styles.menuItem}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};
