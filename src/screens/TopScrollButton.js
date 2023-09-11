import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const TopScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 ${
        isVisible ? "visible" : "invisible"
      }`}
    >
      <button
        className="bg-white hover:bg-TigerColor text-black font-bold py-4 px-4 rounded-full"
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default TopScrollButton;
