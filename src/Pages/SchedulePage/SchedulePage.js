import React from "react";
import { Container100P100P } from "../../Components/BaseContainer";
import { scheduleList } from "./constants";
import { useImageCheck } from "../../hooks/useImageCheck";
import ScheduleItem from "./components/ScheduleItem";
import { ContainerscheduleList } from "./styles";

function SchedulePage() {
  const imageExists = useImageCheck(scheduleList);

  return (
    <Container100P100P>
      <ContainerscheduleList>
        {scheduleList.map((item, index) => (
          <ScheduleItem key={index} item={item} imageExists={imageExists} />
        ))}
      </ContainerscheduleList>
    </Container100P100P>
  );
}

export default SchedulePage;
