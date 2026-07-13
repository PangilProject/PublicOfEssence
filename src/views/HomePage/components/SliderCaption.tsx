"use client";

import styled from "styled-components";

interface SliderCaptionProps {
  title: string;
  subtitle: string;
  /** true면 캡션을 숨김 (영상 재생 중 등) */
  hidden?: boolean;
}

/** 슬라이더 하단에 얹는 그라데이션 캡션 — 클릭은 아래 레이어로 통과 */
function SliderCaption({ title, subtitle, hidden = false }: SliderCaptionProps) {
  return (
    <CaptionOverlay $hidden={hidden}>
      <CaptionTitle>{title}</CaptionTitle>
      <CaptionSub>{subtitle}</CaptionSub>
    </CaptionOverlay>
  );
}

const CaptionOverlay = styled.div<{ $hidden: boolean }>`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 56px 24px 20px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.65), transparent);
  pointer-events: none;
  z-index: 1;
  opacity: ${(props) => (props.$hidden ? 0 : 1)};
  transition: opacity 0.5s ease;
`;

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

export default SliderCaption;
