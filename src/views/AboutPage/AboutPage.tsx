"use client";

import { Container100P100P } from "../../Components/BaseContainer";
import PageHero from "../../Components/PageHero";
import { aboutContent } from "./constants";
import {
  Answer,
  ContainerAnswer,
  ContainerQuestion,
  Question,
  QuestionNumber,
  QuestionSub,
  WrapperRow,
} from "./styles";

function AboutPage() {
  return (
    <Container100P100P>
      <PageHero
        kicker="ABOUT ESSENCE"
        title={
          <>
            그리스도인의 본질을 기억하고
            <br />
            살아가는 공동체
          </>
        }
      />

      {aboutContent.map((section, index) => (
        <WrapperRow key={index}>
          <ContainerQuestion>
            <QuestionNumber>{String(index + 1).padStart(2, "0")}</QuestionNumber>
            <Question>{section.question}</Question>
            <QuestionSub>{section.subtitle}</QuestionSub>
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
