"use client";

import { Container100P100P } from "../../Components/BaseContainer";
import PageHero from "../../Components/PageHero";
import { scheduleList } from "./constants";
import ScheduleItem from "./components/ScheduleItem";
import { ContainerscheduleList } from "./styles";

function SchedulePage() {
  return (
    <Container100P100P>
      <PageHero kicker="SCHEDULE" title="예배와 수련회 일정" />
      <ContainerscheduleList>
        {scheduleList.map((item, index) => (
          <ScheduleItem key={index} item={item} />
        ))}
      </ContainerscheduleList>
    </Container100P100P>
  );
}

export default SchedulePage;
