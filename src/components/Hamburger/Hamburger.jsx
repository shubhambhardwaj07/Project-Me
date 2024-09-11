import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Hamburger.module.css";

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: 20, backgroundColor: "#333" },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      backgroundColor: "#444", // Transition background color
      transition: {
        delay: i * 0.1, // Staggered animation
        duration: 0.5,
        ease: [0.42, 0, 0.58, 1], // Smooth cubic-bezier
      },
    }),
  };

  return (
    <div className={styles.container}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <motion.div
          className={styles.line}
          style={{ backgroundColor: isOpen ? "white" : "black" }}
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
          transition={{ duration: 0.3, ease: [0.42, 0, 0.58, 1] }}
        />
        <motion.div
          className={styles.line}
          style={{ backgroundColor: isOpen ? "white" : "black" }}
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
          transition={{ duration: 0.3, ease: [0.42, 0, 0.58, 1] }}
        />
      </div>

      {/* Sliding Menu */}
      <motion.div
        className={styles.menu}
        initial={{ transform: "translateX(100%)" }}
        animate={{ transform: isOpen ? "translateX(0%)" : "translateX(100%)" }}
        transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
      >
        <motion.ul className={styles.menuItems}>
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <motion.li
              key={item}
              custom={index}
              initial="hidden"
              animate={isOpen ? "visible" : "hidden"}
              variants={menuVariants}
              className={styles.menuItem}
            >
              {item}
              <motion.div
                className={styles.hoverEffect}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: [0.42, 0, 0.58, 1] }}
              />
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};
