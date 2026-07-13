import { useState } from "react";
import { Container100P100P } from "../../Components/BaseContainer.js";
import ImageDownloadButton from "./components/ImageDownloadButton.js";
import {
  TitleSection,
  ResourceTitle,
  ResourceDesc,
  Img,
  Overlay,
  ModalImage,
} from "./styles/ResourceTitle.js";
function ResourcePage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container100P100P>
      <TitleSection>
        <ResourceTitle>설교노트v1</ResourceTitle>
        <ImageDownloadButton
          filePath="/Img/설교노트v1.png"
          fileName="설교노트v1.png"
        />
      </TitleSection>
      <ResourceDesc>
        설교 핵심 정리/묵상 노트입니다. 설교 내용을 더 잘 이해하고, 적용하며,
        기도와 삶 속에서 사용하실 수 있게 돕는 자료입니다.
      </ResourceDesc>
      <Img
        src="Img/설교노트v1.png"
        onClick={() => setIsOpen(true)}
        style={{ cursor: "pointer" }}
      />

      {isOpen && (
        <Overlay onClick={() => setIsOpen(false)}>
          <ModalImage
            src="Img/설교노트v1.png"
            onClick={(e) => e.stopPropagation()}
          />
        </Overlay>
      )}
    </Container100P100P>
  );
}

export default ResourcePage;
