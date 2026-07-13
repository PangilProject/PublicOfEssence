"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import styled from "styled-components";
import { slideImages } from "../constants";
import { Button, ContainerIntroImage, IntroImage } from "../styles/slider.styles";

function ImageSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Fade(),
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
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

  return (
    <ContainerIntroImage>
      <Viewport ref={emblaRef}>
        <SlideTrack>
          {slideImages.map((src, index) => (
            <Slide key={src}>
              <IntroImage src={src} alt={`Essence 예배 현장 사진 ${index + 1}`} />
            </Slide>
          ))}
        </SlideTrack>
      </Viewport>

      <Button onClick={scrollPrev} aria-label="이전 이미지">
        {"<"}
      </Button>
      <Button onClick={scrollNext} aria-label="다음 이미지">
        {">"}
      </Button>

      <DotList>
        {slideImages.map((src, index) => (
          <Dot
            key={src}
            type="button"
            aria-label={`${index + 1}번째 이미지로 이동`}
            $active={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </DotList>
    </ContainerIntroImage>
  );
}

const Viewport = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const SlideTrack = styled.div`
  display: flex;
  height: 100%;
`;

const Slide = styled.div`
  flex: 0 0 100%;
  min-width: 0;
  height: 100%;
`;

const DotList = styled.div`
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 1;
`;

const Dot = styled.button<{ $active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  padding: 0;
  cursor: pointer;
  background-color: ${(props) =>
    props.$active ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.45)"};
  transition: background-color 0.3s ease;
`;

export default ImageSlider;
