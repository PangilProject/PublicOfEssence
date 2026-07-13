"use client";

import type { ReactNode } from "react";
import styled from "styled-components";

interface PageHeroProps {
  /** 포인트 컬러 영문 라벨 (예: ABOUT ESSENCE) */
  kicker: string;
  title: ReactNode;
}

/** 서브 페이지 상단 공통 히어로 — 랜딩의 미션 섹션과 같은 디자인 언어 */
function PageHero({ kicker, title }: PageHeroProps) {
  return (
    <Hero>
      <Kicker>{kicker}</Kicker>
      <Title>{title}</Title>
    </Hero>
  );
}

const Hero = styled.section`
  padding: 4px 0 40px;

  @media (min-width: 1000px) {
    padding: 24px 0 56px;
  }
`;

const Kicker = styled.p`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2.5px;
  color: #ff6347;
`;

const Title = styled.h1`
  margin-top: 12px;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.35;
  word-break: keep-all;

  @media (min-width: 1000px) {
    font-size: 40px;
  }
`;

export default PageHero;
