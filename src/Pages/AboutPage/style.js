import styled from "styled-components";

export const WrapperRow = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  /* padding-top : 50px; */
  box-sizing: border-box;

  margin-bottom: 100px;

  &:last-child {
    margin-bottom: 0px;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerQuestion = styled.div`
  width: 40%;
  @media (min-width: 1000px) {
    width: 30%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const ContainerAnswer = styled.div`
  width: 60%;
  @media (min-width: 1000px) {
    width: 70%;
  }
  @media (max-width: 480px) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const Question = styled.p`
  font-size: 25px;
  font-weight: bold;

  @media (min-width: 1000px) {
    font-size: 30px;
  }
`;

export const Answer = styled.p`
  font-size: 15px;
  line-height: 25px;

  margin-bottom: 10px;

  @media (min-width: 1000px) {
    font-size: 18px;
  }

  &:last-child {
    margin-bottom: 0px;
  }
`;
