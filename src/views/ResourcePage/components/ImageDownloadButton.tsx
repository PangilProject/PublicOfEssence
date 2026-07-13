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
  padding: 8px 20px;
  border-radius: 999px;
  background-color: #111;
  color: white;
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff6347;
  }
`;

export default ImageDownloadButton;
