// components/Template.js
"use client";

import { Transition } from "../components";
import "./globals.scss";

export default function Template({ children }) {
  return (
    <>
      <Transition />
      {children}
    </>
  );
}
