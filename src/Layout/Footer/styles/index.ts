"use client";

import styled from "styled-components";

export const ContainerFooter = styled.div`
  width: 100%;
  margin-top: 100px;
  padding: 40px 0 32px;
  border-top: 1px solid #eee;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Brand = styled.div`
  max-width: 300px;
`;

export const LogoImage = styled.img`
  height: 24px;

  @media (min-width: 1000px) {
    height: 30px;
  }
`;

export const BrandDesc = styled.p`
  margin-top: 14px;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.7;
  color: #666;
  word-break: keep-all;
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  /* 모바일: 타이틀 아래 링크들을 가로로 배치 */
  @media (max-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const ColumnTitle = styled.p`
  margin-bottom: 4px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #999;

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 0;
  }
`;

export const FooterExternalLink = styled.a`
  font-size: 14px;
  font-weight: 400;
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6347;
  }
`;

export const BottomRow = styled.p`
  margin-top: 40px;
  font-size: 12px;
  font-weight: 300;
  color: #999;
`;
