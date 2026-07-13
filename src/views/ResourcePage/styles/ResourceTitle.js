import styled from "styled-components";

export const TitleSection = styled.div`
  display: flex;
  gap: calc(10px);
`;
export const ResourceTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ResourceDesc = styled.p`
  margin-bottom: 5px;
`;

export const Img = styled.img`
  max-width: 250px;
  display: block;
  border: 1px solid gray;
  border-radius: 0.5rem;
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalImage = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 0.75rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
`;
