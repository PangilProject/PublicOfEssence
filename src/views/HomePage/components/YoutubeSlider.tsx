"use client";

import { useRef, useState } from "react";
import Slider from "react-slick";
import YouTube, { type YouTubeEvent, type YouTubePlayer } from "react-youtube";
import styled from "styled-components";

const videoIds = ["zY_7snBXJ6o", "Kph6OMHaFjk", "-IcynLgzh-s"];

export default function YouTubeSlider() {
  const playerRefs = useRef<Record<number, YouTubePlayer>>({});
  const [, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex: number) => {
      if (playerRefs.current[oldIndex]) {
        playerRefs.current[oldIndex].pauseVideo();
      }
    },
    afterChange: (index: number) => {
      setCurrentSlide(index);
    },
  };

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const onReady = (event: YouTubeEvent, index: number) => {
    playerRefs.current[index] = event.target;
  };

  return (
    <Container>
      <Slider {...settings}>
        {videoIds.map((videoId, index) => (
          <VideoWrapper key={videoId}>
            <YouTube
              videoId={videoId}
              opts={opts}
              className="youtube-player"
              onReady={(e) => onReady(e, index)}
            />
          </VideoWrapper>
        ))}
      </Slider>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;

  .youtube-player {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
