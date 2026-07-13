import React, { useState } from "react";
import Modal from "../../Layout/Modal/Modal";
import ImageSlider from "./components/ImageSlider";
import { Container100P100P } from "../../Components/BaseContainer";
import YouTubeSlider from "./components/YoutubeSlider";
import HeroSection from "./components/HeroSection/HeroSection";

import WorshipPosterSlider from "./components/WorshipPosterSlider/WorshipPosterSlider";

function HomePage() {
  const [modalVisible, setModalVisible] = useState(true);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <Container100P100P>
      {modalVisible && (
        <Modal
          visible={modalVisible}
          closable={true}
          maskClosable={true}
          onClose={closeModal}
        ></Modal>
      )}
      <ImageSlider />
      <HeroSection words={["주일 예배 실황", "LIVE WORSHIP"]} />
      <YouTubeSlider />
      <HeroSection words={["총 11번의 집회", "11 POWERFUL WORSHIP"]} />
      <WorshipPosterSlider />
    </Container100P100P>
  );
}

export default HomePage;
