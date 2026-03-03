import React, { useState } from "react";
import { Share2 } from "lucide-react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const FollowUs = () => {
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(null);

  return (
    <div
      className="followus-wrapper"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => {
        setActive(false);
        setHovered(null);
      }}
    >
      {/* HEADER */}
      <div className="followus-header">
        <span>FOLLOW US</span>
        <Share2 size={18} />
      </div>

      {/* ICONS */}
      <div className={`followus-icons ${active ? "show" : ""}`}>
        <a
  href="https://www.linkedin.com/in/webcraft-agency-b79097376?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  target="_blank"
  rel="noopener noreferrer"
  className={`follow-circle linkedin ${
    hovered === "linkedin" ? "expand" : ""
  }`}
  onMouseEnter={() => setHovered("linkedin")}
>
  <FaLinkedinIn />
</a>

        <a
  href="https://www.instagram.com/webcraft__official?igsh=MTllY2xtdGExNmM3MQ=="
  target="_blank"
  rel="noopener noreferrer"
  className={`follow-circle instagram ${
    hovered === "instagram" ? "expand" : ""
  }`}
  onMouseEnter={() => setHovered("instagram")}
>
  <FaInstagram />
</a>
      </div>
    </div>
  );
};

export default FollowUs;