import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

const SkeletonWrapper = styled.div`
  padding: 20px;
  box-sizing: border-box;
  background-color: #f6f7f8;
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Shimmer = styled.div`
  animation: ${shimmer} 1.2s ease-in-out infinite;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
  height: 100%;
  width: 100%;
  border-radius: 4px;
`;

function PageSkeleton() {
  return (
    <SkeletonWrapper>
      <Shimmer />
    </SkeletonWrapper>
  );
}

export default PageSkeleton;
