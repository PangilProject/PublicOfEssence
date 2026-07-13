"use client";

import { useState } from "react";
import { Container100P100P } from "../../Components/BaseContainer";
import PageHero from "../../Components/PageHero";
import ImageDownloadButton from "./components/ImageDownloadButton";
import {
  CardGrid,
  ResourceCard,
  ThumbWrapper,
  Thumb,
  CardBody,
  ResourceTitle,
  ResourceDesc,
  Overlay,
  ModalImage,
} from "./styles/ResourceTitle";

// trailingSlash 환경에서 상대 경로("Img/...")는 /resource/Img/... 로 깨지므로 절대 경로 사용
const NOTE_IMAGE_PATH = "/Img/설교노트v1.png";

function ResourcePage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container100P100P>
      <PageHero kicker="RESOURCE" title="예배와 묵상을 돕는 자료" />

      <CardGrid>
        <ResourceCard>
          <ThumbWrapper onClick={() => setIsOpen(true)}>
            <Thumb src={NOTE_IMAGE_PATH} alt="설교노트v1 미리보기" />
          </ThumbWrapper>
          <CardBody>
            <ResourceTitle>설교노트 v1</ResourceTitle>
            <ResourceDesc>
              설교 핵심 정리/묵상 노트입니다. 설교 내용을 더 잘 이해하고,
              적용하며, 기도와 삶 속에서 사용하실 수 있게 돕는 자료입니다.
            </ResourceDesc>
            <ImageDownloadButton
              filePath={NOTE_IMAGE_PATH}
              fileName="설교노트v1.png"
            />
          </CardBody>
        </ResourceCard>
      </CardGrid>

      {isOpen && (
        <Overlay onClick={() => setIsOpen(false)}>
          <ModalImage
            src={NOTE_IMAGE_PATH}
            alt="설교노트v1 확대 이미지"
            onClick={(e) => e.stopPropagation()}
          />
        </Overlay>
      )}
    </Container100P100P>
  );
}

export default ResourcePage;
