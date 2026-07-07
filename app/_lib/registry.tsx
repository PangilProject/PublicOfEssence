"use client";

import { useState, type ReactNode } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

/**
 * styled-components SSR registry.
 * 빌드(프리렌더) 중 생성된 스타일을 초기 HTML <head>에 삽입해서
 * 크롤러/첫 로드가 스타일이 입혀진 완성 HTML을 받게 한다.
 */
export default function StyledComponentsRegistry({
  children,
}: {
  children: ReactNode;
}) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined") return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
