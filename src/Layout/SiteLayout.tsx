"use client";

import type { ReactNode } from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

/** 기존 LayoutOutlet을 대체 — 모든 페이지 공통 셸 (react-router Outlet → children) */
function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <ContainerSiteLayout>
      <ContainerHeader>
        <Header />
      </ContainerHeader>

      <ContainerMain>{children}</ContainerMain>

      <ContainerFooter>
        <Footer />
      </ContainerFooter>
    </ContainerSiteLayout>
  );
}

const ContainerSiteLayout = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`;

const ContainerHeader = styled.header`
  @media (min-width: 1000px) {
    width: 1000px;
  }
  width: 100%;

  height: 80px;
`;

const ContainerMain = styled.main`
  @media (min-width: 1000px) {
    width: 1000px;
  }
  width: 100%;

  height: 100%;
`;

const ContainerFooter = styled.footer`
  @media (min-width: 1000px) {
    width: 1000px;
  }
  width: 100%;

  height: 100px;
`;

export default SiteLayout;
