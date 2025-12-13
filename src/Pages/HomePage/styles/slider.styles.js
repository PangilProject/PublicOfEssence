import styled from "styled-components";

export const ContainerIntroImage = styled.div`
  width: 100%;
  @media (min-width: 1000px) {
    height: 500px;
  }
  height: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const IntroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;
`;

export const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
  font-size: 24px;
  font-weight: bold;
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
  &:first-of-type {
    left: 10px;
  }
  &:last-of-type {
    right: 10px;
  }
`;
