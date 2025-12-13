import styled from "styled-components";

export const ContainerFooter = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
`;

export const WrapperFotter = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
`;

export const LogoImage = styled.img`
  width: 100px;
  @media (min-width: 1000px) {
    height: 35px;
  }
  padding-bottom: 10px;
`;

export const FooterP = styled.p`
  padding: 0;
  margin: 0;
  font-size: 15px;
  color: gray;
  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const WrapperFooterLeft = styled.div`
  width: 70%;
  @media (min-width: 1000px) {
    width: 50%;
  }
`;
export const WrapperFooterRight = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: end;

  @media (min-width: 1000px) {
    width: 50%;
    justify-content: end;
    flex-direction: row;
    align-items: start;
  }

  & > a {
    color: black;
    text-decoration: none;
    font-size: 15px;
    transition: color 0.5s ease;
    font-weight: bold;
    &:hover {
      color: #ff6347;
    }
    @media (max-width: 550px) {
    }
  }
`;

export const OutsideLink = styled.div`
  margin-bottom: 10px;

  @media (min-width: 1000px) {
    margin: 0px 20px;
  }
`;
