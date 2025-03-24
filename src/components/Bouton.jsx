import React, { useState, useEffect } from "react";
import "./Btntop.css";

const Boutonhautpage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className="btnh"
      style={{ display: isVisible ? "block" : "none" }}
    >
      Haut de page
    </button>
  );
};

export default Boutonhautpage;