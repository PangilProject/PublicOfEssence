import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Container100P100P } from "../../Components/BaseContainer";
import { worshipList } from "./WorshipListInfo";

function WorshipPage() {
  // hoveredItem은 현재 마우스를 올려놓은 항목의 인덱스를 저장하는 상태입니다.
  const [hoveredItem, setHoveredItem] = useState(null);

  // 이미지가 존재하지 않을 경우 사용될 기본 이미지 경로를 저장합니다.
  const emptyImage = "/Img/Image404.png";

  // URL에 해당하는 이미지가 존재하는지 확인하는 함수입니다.
  // 비동기로 작동하며, 이미지가 로드되면 true를 반환하고,
  // 오류가 발생하면 false를 반환합니다.
  const checkImageExists = (url) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(true); // 이미지가 성공적으로 로드된 경우
      img.onerror = () => resolve(false); // 이미지 로드에 실패한 경우
    });
  };

  // 각 이미지의 존재 여부를 저장하는 상태입니다.
  // 객체 형태로 각 이미지 URL을 키로 하여 true/false 값을 저장합니다.
  const [imageExists, setImageExists] = useState({});

  // 컴포넌트가 마운트될 때 한 번만 실행됩니다.
  // 모든 이미지의 존재 여부를 확인하고, 그 결과를 상태로 저장합니다.
  useEffect(() => {
    const checkImages = async () => {
      // 모든 이미지 존재 여부를 동시에 확인하기 위해 Promise 배열 생성
      const promises = worshipList.map((value) => {
        if (value?.image) {
          // 이미지가 있는 경우 해당 이미지의 존재 여부를 체크하는 Promise 반환
          return checkImageExists(value?.image).then((exists) => ({
            [value?.image]: exists,
          }));
        } else {
          // 이미지가 없는 경우 기본적으로 false로 설정된 Promise 반환
          return Promise.resolve({ [value?.image]: false });
        }
      });

      // 모든 이미지 존재 여부 확인 후 결과를 병합하여 새로운 객체 생성
      const results = await Promise.all(promises);
      const newImageExists = results.reduce(
        (acc, cur) => ({ ...acc, ...cur }),
        {}
      );

      // 이미지 존재 여부를 상태로 저장합니다.
      setImageExists(newImageExists);
    };

    // 이미지 존재 여부 확인을 시작합니다.
    checkImages();
  }, []);

  return (
    <Container100P100P>
      <ContainerWorshipList>
        {
          // worshipList 배열을 순회하며 각 항목을 렌더링합니다.
          worshipList.map((value, index) => (
            <WorshipInfoItem
              key={index}
              id={index}
              onMouseEnter={() => setHoveredItem(index)} // 마우스가 항목 위로 올라갔을 때의 이벤트 핸들러
              onMouseLeave={() => setHoveredItem(null)} // 마우스가 항목에서 벗어났을 때의 이벤트 핸들러
            >
              {hoveredItem === index ? (
                // 항목이 호버된 상태일 때 렌더링할 내용
                <ItemInfo color="white">
                  <WorshipData>일자 | {value?.date}</WorshipData>
                  <WorshipPlace>장소 | {value?.place}</WorshipPlace>
                  <Hr />
                  <WorshipTopic>
                    <strong>[주제]</strong> {value?.topic}{" "}
                  </WorshipTopic>
                  <WorshipDescription>{value?.description}</WorshipDescription>
                </ItemInfo>
              ) : (
                // 항목이 호버되지 않았을 때 렌더링할 내용
                <ItemInfo color="black">
                  <WorshipCount>{value?.count}회</WorshipCount>
                  <WorshipImage
                    // 이미지가 존재하는지 여부에 따라 이미지를 선택합니다.
                    src={imageExists[value?.image] ? value?.image : emptyImage}
                    alt={value?.image_alt || "worship_poster"}
                  />
                </ItemInfo>
              )}
            </WorshipInfoItem>
          ))
        }
      </ContainerWorshipList>
    </Container100P100P>
  );
}

const ContainerWorshipList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const WorshipInfoItem = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 20px;
  margin-bottom: 15px;
  padding: 20px;
  box-sizing: border-box;
  margin: 0px 25px 50px 25px;
  transition: background-color 0.5s ease;
  border: 1.5px solid #36363650;

  @media (min-width: 1000px) {
    &:nth-child(3n + 1) {
      margin-left: 0;
    }
    &:nth-child(3n) {
      margin-right: 0;
      margin-bottom: 15px;
    }
  }

  &:hover {
    background-color: #333;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.color};
`;

const WorshipCount = styled.p`
  font-size: 30px;
  font-weight: bold;
`;

const WorshipImage = styled.img`
  width: 100%;
  height: 315px;
  background-color: red * 0.05;
  margin-top: 10px;
  border-radius: 15px;
  overflow: hidden;
  object-fit: cover;
`;

const WorshipPlace = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const WorshipData = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const WorshipTopic = styled.p`
  font-size: 15px;
`;

const Hr = styled.hr`
  margin: 10px 0px;
`;

const WorshipDescription = styled.p`
  margin-top: 10px;
  font-size: 15px;
  font-weight: 400;
`;

export default WorshipPage;
