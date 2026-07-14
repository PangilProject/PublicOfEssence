"use client";

import Link from "next/link";
import styled from "styled-components";

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  font-size: 13px;
  color: #999;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6347;
  }
`;

export const DetailTop = styled.div`
  display: flex;
  gap: 48px;
  margin-bottom: 72px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 28px;
    margin-bottom: 48px;
  }
`;

export const PosterCard = styled.div`
  flex: 0 0 320px;
  align-self: flex-start;
  border: 1.5px solid #36363650;
  border-radius: 20px;
  overflow: hidden;

  img {
    width: 100%;
    display: block;
  }

  @media (max-width: 600px) {
    flex: none;
  }
`;

export const DetailInfo = styled.div`
  flex: 1;
  padding-top: 4px;
`;

export const MetaList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 28px;
`;

export const MetaRow = styled.div`
  display: flex;
  gap: 14px;
  font-size: 14px;
`;

export const MetaLabel = styled.span`
  width: 42px;
  flex-shrink: 0;
  font-weight: 600;
  color: #111;
`;

export const MetaValue = styled.span`
  color: #666;
  font-weight: 300;
`;

export const Verse = styled.blockquote`
  border-left: 3px solid #ff6347;
  padding: 4px 0 4px 16px;
  margin-bottom: 28px;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.8;
  color: #666;
  word-break: keep-all;
`;

export const VerseRef = styled.strong`
  display: block;
  margin-top: 6px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #111;
`;

export const Story = styled.p`
  font-size: 15px;
  font-weight: 300;
  line-height: 1.9;
  color: #444;
  word-break: keep-all;

  & + & {
    margin-top: 16px;
  }
`;

export const SectionKicker = styled.p`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2.5px;
  color: #ff6347;
  margin-bottom: 10px;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 28px;
`;

export const PhotoSection = styled.section`
  margin-bottom: 80px;
`;

export const Pagination = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const PageCard = styled(Link)`
  border: 1.5px solid #36363650;
  border-radius: 20px;
  padding: 22px 26px;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #ff6347;
  }
`;

export const PageCardDisabled = styled.div`
  border: 1.5px solid #36363650;
  border-radius: 20px;
  padding: 22px 26px;
  opacity: 0.35;
`;

export const PageDir = styled.p<{ $align?: "right" }>`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #999;
  margin-bottom: 8px;
  text-align: ${(props) => props.$align || "left"};
`;

export const PageName = styled.p<{ $align?: "right" }>`
  font-size: 16px;
  font-weight: 600;
  text-align: ${(props) => props.$align || "left"};
  word-break: keep-all;
`;
