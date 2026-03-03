import React from "react";

const VideoCard = ({ item, onClick }) => {
  return (
    <div className="video-card" onClick={() => onClick(item)}>

      {/* VIDEO PREVIEW */}
      {item.video ? (
        <video
          src={item.video}
          autoPlay
          muted
          loop
          playsInline
          className="video-preview"
        />
      ) : (
        <iframe
          className="video-preview"
          src={`https://www.youtube.com/embed/${item.youtube}?mute=1&autoplay=1&controls=0&loop=1&playlist=${item.youtube}`}
          title="preview"
          frameBorder="0"
          allow="autoplay"
        />
      )}

      <div className="video-gradient" />

      <div className="video-info">
        <h3>{item.title}</h3>
        <span className="video-arrow">→</span>
      </div>

    </div>
  );
};

export default VideoCard;