"use client";

import { Container100P100P } from "../../Components/BaseContainer";
import PageHero from "../../Components/PageHero";
import { worshipList } from "./constants";
import { useImageCheck } from "../../hooks/useImageCheck";
import WorshipItem from "./components/WorshipItem";
import { ContainerWorshipList } from "./styles";

function WorshipPage() {
  const imageExists = useImageCheck(worshipList);

  return (
    <Container100P100P>
      <PageHero kicker="WORSHIP" title="2016년부터 이어온 집회의 기록" />
      <ContainerWorshipList>
        {worshipList.map((item, index) => (
          <WorshipItem key={index} item={item} imageExists={imageExists} />
        ))}
      </ContainerWorshipList>
    </Container100P100P>
  );
}

export default WorshipPage;
