import styled from "styled-components";

export const HeroContainer = styled.div`
  position: relative;
  height: 500px;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroContent = styled.div`
  text-align: center;
  color: white;
  z-index: 1;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  }
  @media (width > 500px) {
    h1 {
      font-size: 4rem;
    }
  }
`;
