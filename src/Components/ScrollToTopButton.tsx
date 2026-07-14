"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";

/** 모바일 전용 — 일정 이상 스크롤 시 우측 하단에 나타나는 맨 위로 버튼 */
function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <FloatingButton
      type="button"
      aria-label="맨 위로 이동"
      $visible={visible}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 14l7-7 7 7" />
      </svg>
    </FloatingButton>
  );
}

const FloatingButton = styled.button<{ $visible: boolean }>`
  display: none;

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    right: 20px;
    bottom: calc(20px + env(safe-area-inset-bottom));
    /* 모바일 풀스크린 메뉴(z-index: 200)보다는 아래에 위치 */
    z-index: 100;

    width: 44px;
    height: 44px;
    border: none;
    border-radius: 50%;
    background-color: #111;
    color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    cursor: pointer;

    opacity: ${(props) => (props.$visible ? 1 : 0)};
    transform: translateY(${(props) => (props.$visible ? 0 : "12px")});
    pointer-events: ${(props) => (props.$visible ? "auto" : "none")};
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
`;

export default ScrollToTopButton;
