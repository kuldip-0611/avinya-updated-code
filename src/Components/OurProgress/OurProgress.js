import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./ourProgress.css";
import Pause from "../../assets/icons/Pause";
import Play from "../../assets/icons/Play";
import avinyaVideo from "../../assets/video/avinya_video.mp4";
import VideoComponent from "../VideoComponent/VideoComponent";

const OurProgress = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoPlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
          setIsPlaying(true);
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Container fluid className="our-progress-container py-5" id="process">
      <Row className="text-center mb-4">
        <Col>
          <h2 className="our-progress-title text-white">Our Process</h2>
        </Col>
      </Row>

      {/* <Row className="justify-content-center mb-4">
        <Col xs="auto">
          <Button
            variant="outline-light"
            className="progress-heading mx-2 mb-2"
          >
            Collecting agricultural waste
          </Button>
        </Col>
        <Col xs="auto">
          <Button
            variant="outline-light"
            className="progress-heading mx-2 mb-2"
          >
            Converting waste material
          </Button>
        </Col>
        <Col xs="auto">
          <Button
            variant="outline-light"
            className="progress-heading mx-2 mb-2"
          >
            Crafting vegan leather
          </Button>
        </Col>
      </Row> */}

      <Row className="justify-content-center" ref={sectionRef}>
        <Col md={11}>
          <Card className="bg-transparent text-white border-0">
            <VideoComponent avinyaVideo={avinyaVideo} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OurProgress;
