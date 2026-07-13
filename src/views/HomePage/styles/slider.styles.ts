"use client";

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
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  z-index: 2;
  font-size: 48px;
  font-weight: 200;
  line-height: 1;
  color: rgba(255, 255, 255, 0.75);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  transition: color 0.3s ease;
  &:hover {
    color: white;
  }
  &:first-of-type {
    left: 16px;
  }
  &:last-of-type {
    right: 16px;
  }
`;
