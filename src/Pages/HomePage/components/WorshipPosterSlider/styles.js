import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #fff; /* Default white background */
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1a1a1a;
  opacity: 0; /* Start fully transparent */
  z-index: -1; /* Place it behind the track */
`;

// This track contains the posters and will be moved horizontally.
export const Track = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 10vw; // Use viewport width for responsive padding
  will-change: transform;
`;

// A single poster with a background image.
export const Poster = styled.div`
  height: 60vh; /* Reduced size */
  width: 45vh; /* Reduced size */
  margin: 0 5vw;
  flex-shrink: 0;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

  /* Prepare for scaling animation */
  transform: scale(0.85);
  transition: transform 0.4s ease-out;
`;
