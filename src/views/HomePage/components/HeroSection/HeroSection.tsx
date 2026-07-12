"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { HeroContainer, HeroContent } from "./styles";

const HeroSection = ({ words }: { words: string[] }) => {
  const [text] = useTypewriter({
    words: words,
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <HeroContainer>
      <HeroContent>
        {/* 페이지당 h1은 하나만 유지하기 위해 섹션 제목은 h2 사용 */}
        <h2>
          {text}
          <Cursor />
        </h2>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
