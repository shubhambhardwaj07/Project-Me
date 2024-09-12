import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./Hamburger.module.css";

// Define menu items
const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close menu on link click
  };

  const menuVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
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
          {menuItems.map((item, index) => (
            <motion.li
              key={item.path}
              custom={index}
              initial="hidden"
              animate={isOpen ? "visible" : "hidden"}
              variants={menuVariants}
              className={styles.menuItem}
            >
              <Link href={item.path} onClick={handleLinkClick}>
                {item.name}
                <motion.div
                  className={styles.hoverEffect}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: [0.42, 0, 0.58, 1] }}
                />
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};
