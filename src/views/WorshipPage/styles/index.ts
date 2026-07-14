"use client";

import Link from "next/link";
import styled from "styled-components";

export const ContainerWorshipList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ItemInfo = styled.div<{ $color: string }>`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.$color};
`;

// hover 시에만 보이는 상세 정보 — JS 상태 대신 CSS로 토글해서
// 집회 주제/장소/설명이 정적 HTML에 포함되게 한다 (SEO)
export const HoverInfo = styled(ItemInfo)`
  display: none;
`;

export const DefaultInfo = styled(ItemInfo)``;

// 카드 전체가 상세 페이지로 가는 링크 — nth-child 여백 규칙이 유지되도록
// 래퍼를 두지 않고 카드 자체를 Link로 만든다
export const WorshipInfoItem = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
  width: 300px;
  height: 400px;
  border-radius: 20px;
  margin-bottom: 15px;
  padding: 20px;
  box-sizing: border-box;
  margin: 0px 25px 50px 25px;
  transition: background-color 0.5s ease;
  border: 1.5px solid #36363650;

  @media (min-width: 1000px) {
    &:nth-child(3n + 1) {
      margin-left: 0;
    }
    &:nth-child(3n) {
      margin-right: 0;
      margin-bottom: 15px;
    }
  }

  &:hover {
    background-color: #333;

    ${HoverInfo} {
      display: flex;
    }
    ${DefaultInfo} {
      display: none;
    }
  }
`;

export const WorshipCount = styled.p`
  font-size: 30px;
  font-weight: bold;
`;

export const WorshipImage = styled.img`
  width: 100%;
  height: 315px;
  background-color: red * 0.05;
  margin-top: 10px;
  border-radius: 15px;
  overflow: hidden;
  object-fit: cover;
`;

export const WorshipPlace = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const WorshipData = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const WorshipTopic = styled.p`
  font-size: 15px;
`;

export const Hr = styled.hr`
  margin: 10px 0px;
`;

export const WorshipDescription = styled.p`
  margin-top: 10px;
  font-size: 15px;
  font-weight: 400;
`;
