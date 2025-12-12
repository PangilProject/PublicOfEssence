import React, { useState } from "react";
import { Button, ContainerIntroImage, IntroImage } from "./ImageSlider.styles";
import { slideImages } from "./constants";

function ImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const handlePrevClick = () => {
    setOpacity(0.5);
    setTimeout(() => {
      setCurrentImageIndex((_prevIndex_) =>
        _prevIndex_ === 0 ? slideImages.length - 1 : _prevIndex_ - 1
      );
      setOpacity(1);
    }, 500);
  };

  const handleNextClick = () => {
    setOpacity(0.5);
    setTimeout(() => {
      setCurrentImageIndex((_prevIndex_) =>
        _prevIndex_ === slideImages.length - 1 ? 0 : _prevIndex_ + 1
      );
      setOpacity(1);
    }, 500);
  };

  return (
    <ContainerIntroImage>
      <Button onClick={handlePrevClick}>{"<"}</Button>
      <IntroImage
        src={slideImages[currentImageIndex]}
        alt="Intro Image"
        style={{ opacity }}
      />
      <Button onClick={handleNextClick}>{">"}</Button>
    </ContainerIntroImage>
  );
}

export default ImageSlider;
