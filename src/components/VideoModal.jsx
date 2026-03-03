import React from "react";

const VideoModal = ({ video, onClose }) => {
  if (!video) return null;

  // detect vertical video automatically
  const isShortform = video.includes("short");

  return (
    <div className="video-modal" onClick={onClose}>
      <div
        className={`video-modal-content ${
          isShortform ? "shortform-modal" : "longform-modal"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <video
          src={video}
          controls
          autoPlay
          playsInline
          className="modal-video"
        />

        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
};

export default VideoModal;