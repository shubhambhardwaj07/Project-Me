"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "./Transition.scss"; // Import your global CSS
const Transition = () => {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 2000); // Match the duration of your curtain transition

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <div
        className={`curtain top ${isTransitioning ? "transitioning" : ""}`}
      ></div>
      <div
        className={`curtain bottom ${isTransitioning ? "transitioning" : ""}`}
      ></div>
    </>
  );
};

export default Transition;
