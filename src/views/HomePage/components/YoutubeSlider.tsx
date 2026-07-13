"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import YouTube, { type YouTubeEvent, type YouTubePlayer } from "react-youtube";
import styled from "styled-components";
import { Button } from "../styles/slider.styles";

const videoIds = ["zY_7snBXJ6o", "Kph6OMHaFjk", "-IcynLgzh-s"];

interface YouTubeSliderProps {
  title?: string;
  subtitle?: string;
}

export default function YouTubeSlider({ title, subtitle }: YouTubeSliderProps) {
  const playerRefs = useRef<Record<number, YouTubePlayer>>({});
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // 슬라이드가 바뀌면 화면에서 벗어난 영상을 일시정지 (기존 slick beforeChange 동작 보존)
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      const current = emblaApi.selectedScrollSnap();
      setSelectedIndex(current);
      Object.entries(playerRefs.current).forEach(([index, player]) => {
        if (Number(index) !== current) {
          player?.pauseVideo?.();
        }
      });
    };
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

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
      <Viewport ref={emblaRef}>
        <SlideTrack>
          {videoIds.map((videoId, index) => (
            <Slide key={videoId}>
              <VideoWrapper>
                <YouTube
                  videoId={videoId}
                  opts={opts}
                  className="youtube-player"
                  onReady={(e) => onReady(e, index)}
                />
              </VideoWrapper>
            </Slide>
          ))}
        </SlideTrack>
      </Viewport>

      <Button onClick={scrollPrev} aria-label="이전 영상">
        {"‹"}
      </Button>
      <Button onClick={scrollNext} aria-label="다음 영상">
        {"›"}
      </Button>

      {/* 영상 아래 검은 띠 — 타이틀과 dots를 배치해 영상을 가리지 않는다 */}
      <CaptionBar>
        <div>
          {title && <CaptionTitle>{title}</CaptionTitle>}
          {subtitle && <CaptionSub>{subtitle}</CaptionSub>}
        </div>
        <DotList>
          {videoIds.map((videoId, index) => (
            <Dot
              key={videoId}
              type="button"
              aria-label={`${index + 1}번째 영상으로 이동`}
              $active={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </DotList>
      </CaptionBar>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  position: relative;
  background-color: #111;
`;

const Viewport = styled.div`
  width: 100%;
  overflow: hidden;
`;

const SlideTrack = styled.div`
  display: flex;
`;

const Slide = styled.div`
  flex: 0 0 100%;
  min-width: 0;
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

const CaptionBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 20px;
`;

/* 이미지 슬라이더의 SliderCaption과 동일한 텍스트 스타일 */
const CaptionTitle = styled.h2`
  font-size: 15px;
  font-weight: bold;
  color: white;

  @media (min-width: 1000px) {
    font-size: 24px;
  }
`;

const CaptionSub = styled.p`
  margin-top: 4px;
  font-size: 10px;
  font-weight: 300;
  letter-spacing: 1.5px;
  color: rgba(255, 255, 255, 0.8);

  @media (min-width: 1000px) {
    font-size: 11px;
  }
`;

const DotList = styled.div`
  display: flex;
  gap: 8px;
  flex-shrink: 0;
`;

const Dot = styled.button<{ $active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  padding: 0;
  cursor: pointer;
  background-color: ${(props) =>
    props.$active ? "white" : "rgba(255, 255, 255, 0.35)"};
  transition: background-color 0.3s ease;
`;
