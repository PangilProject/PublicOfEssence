"use client";

import styled from "styled-components";

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ResourceCard = styled.div`
  border: 1.5px solid #36363650;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const ThumbWrapper = styled.div`
  cursor: zoom-in;
  border-bottom: 1px solid #eee;
  background-color: #fafafa;
`;

export const Thumb = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  object-position: top;
  display: block;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.85;
  }
`;

export const CardBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex: 1;
`;

export const ResourceTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const ResourceDesc = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 1.7;
  color: #555;
  word-break: keep-all;
  flex: 1;
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalImage = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 0.75rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
`;
