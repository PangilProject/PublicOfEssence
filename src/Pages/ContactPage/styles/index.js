import styled from "styled-components";

export const ContainerMenu = styled.div`
  width: 100%;
  height: 150px;
  /* background-color: red; */

  display: flex;
`;

export const ContainerContactItem = styled.div`
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  /* background-color: yellow; */

  display: flex;
  flex-direction: column;
`;

export const ContactTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const ContactSubTitle = styled.p`
  font-size: 15px;
  font-weight: 200;
  color: #333;
  margin-top: 40px;
`;

export const ContactEmail = styled.p`
  font-size: 15px;
  font-weight: 300;

  margin-top: 10px;
`;
