import { Outlet } from "react-router-dom";
import styled from "styled-components";
import React, { Suspense } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import PageSkeleton from "./PageSkeleton";
function LayoutOutlet() {
  return (
    <ContainerLayoutOutlet>
      <ContainerHeader>
        <Header />
      </ContainerHeader>

      <ContainerOutler>
        <Suspense fallback={<PageSkeleton />}>
          <Outlet />
        </Suspense>
      </ContainerOutler>

      <ContainerFooter>
        <Footer />
      </ContainerFooter>
    </ContainerLayoutOutlet>
  );
}

const ContainerLayoutOutlet = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`;

const ContainerHeader = styled.div`
  @media (min-width: 1000px) {
    width: 1000px;
  }
  width: 100%;

  height: 80px;
`;

const ContainerOutler = styled.div`
  @media (min-width: 1000px) {
    width: 1000px;
  }
  width: 100%;

  height: 100%;
`;

const ContainerFooter = styled.div`
  @media (min-width: 1000px) {
    width: 1000px;
  }
  width: 100%;

  height: 100px;
`;

export default LayoutOutlet;
