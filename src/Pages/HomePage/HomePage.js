import React, { useState } from "react";
import Modal from "../../Layout/Modal/Modal";
import ImageSlider from "./components/ImageSlider";
import { Container100P100P } from "../../Components/BaseContainer";

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
    </Container100P100P>
  );
}

export default HomePage;
