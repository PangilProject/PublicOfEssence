import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../../Layout/Modal";

function HomePage() {
    const images = [
        "/Img/worship/worship3.jpg",
        "/Img/worship/worship5.jpg",
        "/Img/worship/worship6.jpg"
    ];

    const [modalVisible, setModalVisible] = useState(true);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [opacity, setOpacity] = useState(1); // opacity 상태 추가

    const handlePrevClick = () => {
        setOpacity(0.5); // opacity를 0으로 설정
        setTimeout(() => {
        setCurrentImageIndex((_prevIndex_) =>
            _prevIndex_ === 0 ? images.length - 1 : _prevIndex_ - 1
        );
        setOpacity(1); // 다음 이미지 로드 후 opacity를 1로 설정
        }, 500); // 0.1초 후에 다음 이미지로 전환
    };

    const handleNextClick = () => {
        setOpacity(0.5); // opacity를 0으로 설정
        setTimeout(() => {
        setCurrentImageIndex((_prevIndex_) =>
            _prevIndex_ === images.length - 1 ? 0 : _prevIndex_ + 1
        );
        setOpacity(1); // 다음 이미지 로드 후 opacity를 1로 설정
        }, 500); // 0.1초 후에 다음 이미지로 전환
    };

    // const openModal = () => {
    //     setModalVisible(true)
    // }
    const closeModal = () => {
        setModalVisible(false)
    }


    return (
        <Container100P100P>
                {modalVisible && (
                    <Modal visible={modalVisible} closable={true} maskClosable={true} onClose={closeModal}></Modal>
                )}
            <ContainerIntroImage>
                <Button onClick={handlePrevClick}>{"<"}</Button>
                <IntroImage
                    src={images[currentImageIndex]}
                    alt="Intro Image"
                    style={{ opacity }} // opacity 값 적용
                />
                <Button onClick={handleNextClick}>{">"}</Button>
            </ContainerIntroImage>

            {/* <ContainerPosterList> */}
            {/* </ContainerPosterList> */}

            
        </Container100P100P>
    );
}

export const Container100P100P = styled.div`
    width: 100%;
    padding-top: 30px;
`;

const ContainerIntroImage = styled.div`
    width: 100%;
    @media (min-width : 1000px){
        height: 500px;
    }
    height : 50vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden; /* 부모 요소에서 넘치는 부분을 숨김 */
`;

const IntroImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover; /* 이미지가 부모 요소의 크기에 맞게 조정되며 넘치는 부분은 잘림 */
    transition: opacity 0.5s ease-in-out; /* 트랜지션 속성 추가 */
`;

const Button = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    border: none;
    padding: 10px;
    cursor: pointer;
    z-index: 1;
    font-size: 24px;
    font-weight: bold;
    &:hover {
        background-color: rgba(255, 255, 255, 0.8);
    }
    &:first-of-type {
        left: 10px;
    }
    &:last-of-type {
        right: 10px;
    }
`;

const ContainerPosterList = styled.div`
    width: 100%;
    height : 1000px;
    /* background-color: red; */
`

export default HomePage;
