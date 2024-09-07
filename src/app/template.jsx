// components/Template.js
"use client";

import { motion, cubicBezier, AnimatePresence } from "framer-motion";
import "./globals.scss";

const customEasing = cubicBezier(0.645, 0.045, 0.355, 1);

export default function Template({ children }) {
  return (
    <div className="wrapper">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ y: "100%" }} // Starts from the bottom
          animate={{ y: ["100%", "0%", "0%", "-100%"] }}
          transition={{
            duration: 1.75, // Total duration for the animation
            ease: customEasing,
          }}
          className="curtain"
        >
          <div className="curtain-content">
            <h1 className="curtain-text">Welcome to My Site</h1>
            <img
              src="/images/background-image.jpg" // Path relative to public folder
              alt="Background"
              className="curtain-image"
            />
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="content">{children}</div>
    </div>
  );
}
