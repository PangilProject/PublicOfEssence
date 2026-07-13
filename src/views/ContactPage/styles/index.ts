"use client";

import styled from "styled-components";

export const ContainerMenu = styled.div`
  width: 100%;

  display: flex;
  gap: 40px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const ContainerContactItem = styled.div`
  flex: 1;
  box-sizing: border-box;
  padding: 24px;
  border: 1.5px solid #36363650;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
`;

export const ContactTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const ContactSubTitle = styled.p`
  font-size: 14px;
  font-weight: 200;
  color: #666;
  margin-top: 4px;
`;

export const ContactHr = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 16px 0;
`;

export const ContactDetailRow = styled.p`
  font-size: 15px;
  font-weight: 300;

  margin-top: 8px;

  &:first-of-type {
    margin-top: 0;
  }

  & > a {
    color: black;
    text-decoration: none;
    transition: color 0.5s ease;

    &:hover {
      color: #ff6347;
    }
  }
`;

export const ContactDetailLabel = styled.strong`
  display: inline-block;
  min-width: 70px;
  font-weight: 600;
`;

export const CopyTrigger = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 15px;
  font-weight: 300;
  font-family: inherit;
  color: black;
  transition: color 0.5s ease;

  &:hover {
    color: #ff6347;
  }
`;

export const CopiedBadge = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #ff6347;
`;
