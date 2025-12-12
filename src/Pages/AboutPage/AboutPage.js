import { Container100P100P } from "../../Components/BaseContainer";
import { aboutContent } from "./constants";
import {
  Answer,
  ContainerAnswer,
  ContainerQuestion,
  Question,
  WrapperRow,
} from "./AboutPage.style";

function AboutPage() {
  return (
    <Container100P100P>
      {aboutContent.map((section, index) => (
        <WrapperRow key={index}>
          <ContainerQuestion>
            <Question>{section.question}</Question>
          </ContainerQuestion>
          <ContainerAnswer>
            {section.answers.map((answer, ansIndex) => (
              <Answer key={ansIndex}>{answer}</Answer>
            ))}
          </ContainerAnswer>
        </WrapperRow>
      ))}
    </Container100P100P>
  );
}
export default AboutPage;
