"use client";

import styled from "styled-components";
import ImageSlider from "./components/ImageSlider";
import { Container100P100P } from "../../Components/BaseContainer";
import YouTubeSlider from "./components/YoutubeSlider";

function HomePage() {
  return (
    <Container100P100P>
      <SectionStack>
        <ImageSlider />
        <YouTubeSlider />
      </SectionStack>
    </Container100P100P>
  );
}

// 섹션 사이 수직 여백
const SectionStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 1000px) {
    gap: 80px;
  }
`;

export default HomePage;
