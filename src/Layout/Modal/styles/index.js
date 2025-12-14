import styled from "styled-components";

export const ModalInner2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgStyle = styled.div`
  width: 300px;
  padding: 15px;
  height: 100px;
  background-color: gray;
  opacity: 0.95;
  border-radius: 20px 20px 0px 0px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  font-size: 20px;
`;

export const CloseStyle = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #282828;
  width: 300px;
  padding: 15px;
  border-radius: 0 0 15px 15px;
  color: #ffffff;
`;

export const Close = styled.span`
  cursor: pointer;
`;

export const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

export const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

export const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`;
