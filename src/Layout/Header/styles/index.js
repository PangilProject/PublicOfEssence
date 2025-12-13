import styled from "styled-components";

export const ContainerHeader = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;

  @media (min-width: 1000px) {
    align-items: center;
  }
  align-items: start;

  @media (max-width: 550px) {
    display: block;
  }
`;

export const ContainerLogo = styled.div`
  width: 50%;
`;
export const MenuItemList = styled.div`
  display: flex;
  justify-content: row;
`;

export const MenuItem = styled.div`
  @media (max-width: 550px) {
    text-align: left;
    margin-left: 0;
    margin-right: 15px;
    font-size: 15px;
  }
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

export const LogoImage = styled.img`
  position: absolute;
  height: 30px;
  transition: opacity 0.5s ease;
  opacity: ${(props) => (props.hovered ? 1 : 0)};

  @media (min-width: 1000px) {
    height: 50px;
  }
`;
