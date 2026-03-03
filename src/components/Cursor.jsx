import { useEffect, useRef } from "react";

const Cursor = () => {
  const ringRef = useRef(null);

  useEffect(() => {
    const ring = ringRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;

    /* ================= MOUSE MOVE ================= */
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    /* ================= GLOBAL HOVER DETECTION ================= */
    const hoverSelector =
      "a, button, .work-card, .follow-circle, .hero-btn";

    const handleMouseOver = (e) => {
      if (e.target.closest(hoverSelector)) {
        ring.classList.add("cursor-hover");
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest(hoverSelector)) {
        ring.classList.remove("cursor-hover");
      }
    };

    /* ================= SMOOTH FOLLOW ================= */
    const animate = () => {
      posX += (mouseX - posX) * 0.14;
      posY += (mouseY - posY) * 0.14;

      // IMPORTANT: combine transforms
      ring.style.transform =
        `translate(${posX}px, ${posY}px) translate(-50%, -50%)`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return <div ref={ringRef} className="cursor-ring"></div>;
};

export default Cursor;