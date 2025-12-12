import { Container100P100P } from "../../Components/BaseContainer";
import { worshipList } from "./WorshipListInfo";
import { useImageCheck } from "./useImageCheck";
import WorshipItem from "./WorshipItem";
import { ContainerWorshipList } from "./WorshipPage.styles";

function WorshipPage() {
  const imageExists = useImageCheck(worshipList);

  return (
    <Container100P100P>
      <ContainerWorshipList>
        {worshipList.map((item, index) => (
          <WorshipItem key={index} item={item} imageExists={imageExists} />
        ))}
      </ContainerWorshipList>
    </Container100P100P>
  );
}

export default WorshipPage;
