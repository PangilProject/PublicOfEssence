import { Container100P100P } from "../../Components/BaseContainer";
import { worshipList } from "./constants";
import { useImageCheck } from "./hooks/useImageCheck";
import WorshipItem from "./components/WorshipItem";
import { ContainerWorshipList } from "./styles";

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
