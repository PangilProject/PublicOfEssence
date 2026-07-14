"use client";

import { Container100P100P } from "../../Components/BaseContainer";
import PageHero from "../../Components/PageHero";
import { worshipList } from "./constants";
import WorshipItem from "./components/WorshipItem";
import { ContainerWorshipList } from "./styles";

function WorshipPage() {
  /* 최신 집회가 먼저 보이도록 회차 내림차순 정렬 */
  const sortedList = [...worshipList].sort((a, b) => b.count - a.count);

  return (
    <Container100P100P>
      <PageHero kicker="WORSHIP" title="2016년부터 이어온 집회의 기록" />
      <ContainerWorshipList>
        {sortedList.map((item) => (
          <WorshipItem key={item.count} item={item} />
        ))}
      </ContainerWorshipList>
    </Container100P100P>
  );
}

export default WorshipPage;
