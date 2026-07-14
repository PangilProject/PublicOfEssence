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
import { cldImage, cldDownload } from "../../../app/_lib/cloudinary";

const NOTE_IMAGE_ID = "sermon-note-v1";

function ResourcePage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container100P100P>
      <PageHero kicker="RESOURCE" title="예배와 묵상을 돕는 자료" />

      <CardGrid>
        <ResourceCard>
          <ThumbWrapper onClick={() => setIsOpen(true)}>
            <Thumb src={cldImage(NOTE_IMAGE_ID, 800)} alt="설교노트v1 미리보기" />
          </ThumbWrapper>
          <CardBody>
            <ResourceTitle>설교노트 v1</ResourceTitle>
            <ResourceDesc>
              설교 핵심 정리/묵상 노트입니다. 설교 내용을 더 잘 이해하고,
              적용하며, 기도와 삶 속에서 사용하실 수 있게 돕는 자료입니다.
            </ResourceDesc>
            <ImageDownloadButton
              filePath={cldDownload(NOTE_IMAGE_ID)}
              fileName="설교노트v1.png"
            />
          </CardBody>
        </ResourceCard>
      </CardGrid>

      {isOpen && (
        <Overlay onClick={() => setIsOpen(false)}>
          <ModalImage
            src={cldImage(NOTE_IMAGE_ID)}
            alt="설교노트v1 확대 이미지"
            onClick={(e) => e.stopPropagation()}
          />
        </Overlay>
      )}
    </Container100P100P>
  );
}

export default ResourcePage;
