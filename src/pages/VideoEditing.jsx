import React, { useState } from "react";
import "../App.css";

import VideoCard from "../components/VideoCard";
import VideoModal from "../components/VideoModal";

/* LOCAL SHORTFORM */
import short1 from "../assets/videos/short1.mp4";
import short2 from "../assets/videos/short2.mp4";
import short3 from "../assets/videos/short3.mp4";
import short4 from "../assets/videos/short4.mp4";
import short5 from "../assets/videos/short5.mp4";
import short6 from "../assets/videos/short6.mp4";

/* LOCAL LONGFORM */
import long1 from "../assets/videos/long1.mp4";
import long2 from "../assets/videos/long2.mp4";
import long3 from "../assets/videos/long3.mp4";


const videos = [
  // SHORTFORM
  { title: "Shortform 1", video: short1, type: "shortform" },
  { title: "Shortform 2", video: short2, type: "shortform" },
  { title: "Shortform 3", video: short3, type: "shortform" },
  { title: "Shortform 4", video: short4, type: "shortform" },
  { title: "Shortform 5", video: short5, type: "shortform" },
  { title: "Shortform 6", video: short6, type: "shortform" },

  // LONGFORM (ALL LOCAL NOW ✅)
  { title: "Longform Film", video: long1, type: "longform" },
  { title: "Brand Story", video: long2, type: "longform" },
  { title: "Cinematic Project", video: long3, type: "longform" },
];

const VideoEditing = () => {
  const [filter, setFilter] = useState("all");
  const [activeVideo, setActiveVideo] = useState(null);

  const filteredVideos =
    filter === "all"
      ? videos
      : videos.filter((v) => v.type === filter);

  return (
    <div className="video-page">

      {/* HERO */}
      <section className="video-hero">
        <span className="video-badge">
          VISUAL STORIES IN MOTION
        </span>

        <h1>OUR VIDEOGRAPHY</h1>

        {/* FILTERS */}
        <div className="video-filters">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            ALL
          </button>

          <button
            className={filter === "shortform" ? "active" : ""}
            onClick={() => setFilter("shortform")}
          >
            SHORTFORM
          </button>

          <button
            className={filter === "longform" ? "active" : ""}
            onClick={() => setFilter("longform")}
          >
            LONGFORM
          </button>
        </div>
      </section>

      {/* GRID */}
      <section className="video-grid">
        {filteredVideos.map((item, i) => (
          <VideoCard
            key={i}
            item={item}
            onClick={setActiveVideo}
          />
        ))}
      </section>

      {/* MODAL */}
      {activeVideo && (
        <VideoModal
          video={activeVideo.video}
          youtube={activeVideo.youtube}
          onClose={() => setActiveVideo(null)}
        />
      )}

    </div>
  );
};

export default VideoEditing;