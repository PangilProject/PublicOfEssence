"use client";

import Link from "next/link";
import styled, { keyframes } from "styled-components";

export const ContainerHeader = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;

  @media (min-width: 1000px) {
    align-items: center;
  }
  align-items: start;

  /* 모바일: 로고와 메뉴 버튼을 같은 줄, 둘 다 상단 정렬 */
  @media (max-width: 600px) {
    align-items: flex-start;
  }
`;

export const ContainerLogo = styled.div`
  width: 50%;
`;

export const MenuItemList = styled.nav`
  display: flex;

  /* 모바일: 상단 메뉴 숨김 (MENU 버튼 → 풀스크린 오버레이) */
  @media (max-width: 600px) {
    display: none;
  }
`;

export const MenuItem = styled.div`
  @media (min-width: 1000px) {
    font-size: 20px;
  }
  text-align: right;
  font-size: 17px;
  font-weight: 500;
  transition: color 0.5s ease;

  margin-left: 30px;

  &:hover {
    color: #ff6347;
  }
`;

export const LogoContainer = styled.div`
  position: relative;
  height: 50px;
`;

export const LogoImage = styled.img<{ $hovered: boolean }>`
  position: absolute;
  height: 30px;
  transition: opacity 0.5s ease;
  opacity: ${(props) => (props.$hovered ? 1 : 0)};

  @media (min-width: 1000px) {
    height: 50px;
  }
`;

/* ===== 모바일 풀스크린 메뉴 ===== */

/* 두 줄 라인 아이콘 — 아래 줄이 짧은 비대칭 형태 */
export const MobileMenuButton = styled.button`
  display: none;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 7px;
    background: none;
    border: none;
    /* 로고(30px 높이)와 시각적 상단 라인을 맞추기 위한 여백 */
    padding: 9px 0 0;
    cursor: pointer;

    & > span {
      display: block;
      height: 2px;
      background-color: black;
      border-radius: 2px;
    }
    & > span:first-child {
      width: 26px;
    }
    & > span:last-child {
      width: 16px;
    }
  }
`;

const overlayFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

/* 레이아웃 패딩(20px)과 동일하게 맞춰 헤더 로고와 같은 위치에 오버레이 로고가 놓이게 함 */
export const MobileOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  background-color: #111;
  display: flex;
  flex-direction: column;
  padding: 20px 20px calc(32px + env(safe-area-inset-bottom));
  box-sizing: border-box;
  animation: ${overlayFadeIn} 0.25s ease;
`;

export const OverlayTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const OverlayLogoLink = styled(Link)`
  display: flex;
`;

/* 검정 로고를 CSS 필터로 흰색 반전 — 헤더 로고와 동일한 30px */
export const OverlayLogo = styled.img`
  height: 30px;
  filter: brightness(0) invert(1);
`;

export const OverlayClose = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  font-size: 22px;
  line-height: 1;
  color: white;
`;

export const OverlayList = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 22px;
`;

export const OverlayLink = styled(Link)<{ $active: boolean }>`
  font-size: 32px;
  font-weight: bold;
  text-decoration: none;
  color: ${(props) => (props.$active ? "#ff6347" : "white")};
  transition: color 0.3s ease;
`;

export const OverlaySocial = styled.div`
  display: flex;
  gap: 24px;

  & > a {
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
  }
`;
