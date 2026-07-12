"use client";

import { useState } from "react";
import { slideImages } from "../constants";
import {
  Button,
  ContainerIntroImage,
  IntroImage,
} from "../styles/slider.styles";

function ImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const handlePrevClick = () => {
    setOpacity(0.5);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? slideImages.length - 1 : prevIndex - 1
      );
      setOpacity(1);
    }, 500);
  };

  const handleNextClick = () => {
    setOpacity(0.5);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
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
