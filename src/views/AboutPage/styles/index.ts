"use client";

import styled from "styled-components";

export const WrapperRow = styled.section`
  width: 100%;
  height: auto;

  display: flex;
  box-sizing: border-box;

  padding-top: 48px;
  margin-bottom: 48px;
  border-top: 1px solid #eee;

  &:last-child {
    margin-bottom: 0px;
  }

  @media (min-width: 1000px) {
    padding-top: 64px;
    margin-bottom: 64px;
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
    margin-top: 24px;
  }
`;

export const QuestionNumber = styled.p`
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #ff6347;
`;

export const Question = styled.h2`
  margin-top: 8px;
  font-size: 25px;
  font-weight: bold;

  @media (min-width: 1000px) {
    font-size: 30px;
  }
`;

export const QuestionSub = styled.p`
  margin-top: 6px;
  font-size: 11px;
  font-weight: 300;
  letter-spacing: 1.5px;
  color: #999;
`;

export const Answer = styled.p`
  font-size: 15px;
  line-height: 1.8;
  color: #333;
  word-break: keep-all;

  margin-bottom: 14px;

  @media (min-width: 1000px) {
    font-size: 17px;
  }

  &:last-child {
    margin-bottom: 0px;
  }
`;
