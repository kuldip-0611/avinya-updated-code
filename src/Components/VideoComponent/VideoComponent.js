import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import { useInView } from "react-intersection-observer";
import { Card } from "react-bootstrap";
import Pause from "../../assets/icons/Pause";
import Play from "../../assets/icons/Play";

const VideoComponent = ({ avinyaVideo }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const handleVideoPlayPause = (e) => {
    if (isPlaying) {
      playerRef.current?.getInternalPlayer()?.pause();
    } else {
      playerRef.current?.getInternalPlayer()?.play();
      setIsMuted(false);
    }
    setIsPlaying((prev) => !prev);
  };

  return (
    <div ref={ref} style={{ position: "relative", width: "100%" }}>
      <div onClick={handleVideoPlayPause} style={{ cursor: "pointer" }}>
        <ReactPlayer
          ref={playerRef}
          url={avinyaVideo}
          width="100%"
          height="500px"
          playing={isPlaying || inView}
          muted={isMuted}
          playsinline
          onStart={() => setTimeout(() => setIsMuted(false), 1000)}
        />
      </div>

      <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
        <div
          className="play-button"
          onClick={(e) => {
            e.stopPropagation();
            handleVideoPlayPause();
          }}
          style={{
            textAlign: "center",
            cursor: "pointer",
            background: "rgba(0, 0, 0, 0.5)",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isPlaying ? (
            <Pause size={40} color="white" />
          ) : (
            <Play size={40} color="white" />
          )}
        </div>
      </Card.ImgOverlay>
    </div>
  );
};

export default VideoComponent;
