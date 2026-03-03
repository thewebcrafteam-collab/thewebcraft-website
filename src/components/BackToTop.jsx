import React, { useRef } from "react";

const BackToTop = () => {
  const btnRef = useRef(null);

  const handleMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btnRef.current.style.transform =
      `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const reset = () => {
    btnRef.current.style.transform = "translate(0,0)";
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      ref={btnRef}
      className="backtotop-btn"
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={scrollTop}
    >
      ↑
    </button>
  );
};

export default BackToTop;