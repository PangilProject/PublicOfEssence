"use client";

import styled from "styled-components";

interface ImageDownloadButtonProps {
  filePath: string;
  fileName: string;
}

function ImageDownloadButton({ filePath, fileName }: ImageDownloadButtonProps) {
  return (
    <DownloadButton href={filePath} download={fileName}>
      다운로드
    </DownloadButton>
  );
}

const DownloadButton = styled.a`
  color: white;
  background-color: cornflowerblue;
  text-decoration: none;
  padding: 4px 8px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.2rem;
  font-size: 12px;
  height: 100%;

  &:hover {
    opacity: 0.8;
  }
`;

export default ImageDownloadButton;
