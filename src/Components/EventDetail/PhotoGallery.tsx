"use client";

import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import type { EventPhoto } from "../../views/WorshipPage/constants";
import { cldImage, cldThumb } from "../../../app/_lib/cloudinary";

interface PhotoGalleryProps {
  photos: EventPhoto[];
}

function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [current, setCurrent] = useState<number | null>(null);

  const move = useCallback(
    (delta: number) => {
      setCurrent((prev) =>
        prev === null ? prev : (prev + delta + photos.length) % photos.length
      );
    },
    [photos.length]
  );

  useEffect(() => {
    if (current === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCurrent(null);
      if (e.key === "ArrowLeft") move(-1);
      if (e.key === "ArrowRight") move(1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [current, move]);

  return (
    <>
      <Grid>
        {photos.map((photo, index) => (
          <GridImage
            key={photo.id}
            src={cldThumb(photo.id, 600)}
            alt={photo.alt}
            loading="lazy"
            onClick={() => setCurrent(index)}
          />
        ))}
      </Grid>

      {current !== null && (
        <Lightbox onClick={() => setCurrent(null)}>
          <CloseButton aria-label="닫기" onClick={() => setCurrent(null)}>
            ×
          </CloseButton>
          {photos.length > 1 && (
            <ArrowButton
              $side="left"
              aria-label="이전 사진"
              onClick={(e) => {
                e.stopPropagation();
                move(-1);
              }}
            >
              ‹
            </ArrowButton>
          )}
          <LightboxImage
            src={cldImage(photos[current].id, 1600)}
            alt={photos[current].alt}
            onClick={(e) => e.stopPropagation()}
          />
          {photos.length > 1 && (
            <ArrowButton
              $side="right"
              aria-label="다음 사진"
              onClick={(e) => {
                e.stopPropagation();
                move(1);
              }}
            >
              ›
            </ArrowButton>
          )}
          <Counter>
            {current + 1} / {photos.length}
          </Counter>
        </Lightbox>
      )}
    </>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;

const GridImage = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 14px;
  display: block;
  cursor: zoom-in;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.85;
  }
`;

const Lightbox = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10, 10, 10, 0.93);
`;

const LightboxImage = styled.img`
  max-width: 86vw;
  max-height: 82vh;
  border-radius: 6px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 28px;
  font-size: 34px;
  font-weight: 200;
  color: rgba(255, 255, 255, 0.75);
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

const ArrowButton = styled.button<{ $side: "left" | "right" }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.$side === "left" ? "left: 24px;" : "right: 24px;")}
  font-size: 48px;
  font-weight: 200;
  color: rgba(255, 255, 255, 0.75);
  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.4);
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  @media (max-width: 600px) {
    ${(props) => (props.$side === "left" ? "left: 8px;" : "right: 8px;")}
  }
`;

const Counter = styled.p`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 13px;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.7);
`;

export default PhotoGallery;
