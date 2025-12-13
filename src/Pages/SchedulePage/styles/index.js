import styled from "styled-components";

export const ContainerscheduleList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ScheduleInfoItem = styled.div`
  width: 300px;
  height: 390px;
  border-radius: 20px;
  margin-bottom: 15px;
  padding: 20px;
  box-sizing: border-box;
  margin: 0px 25px 50px 25px;
  transition: background-color 0.5s ease;
  border: 1.5px solid #36363650;

  @media (min-width: 1000px) {
    &:nth-child(3n + 1) {
      margin-left: 0;
    }
    &:nth-child(3n) {
      margin-right: 0;
      margin-bottom: 15px;
    }
  }

  &:hover {
    background-color: #333;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.color};
`;

export const WorshipCount = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const WorshipImage = styled.img`
  width: 100%;
  height: 315px;
  background-color: red * 0.05;
  margin-top: 10px;
  border-radius: 15px;
  overflow: hidden;
  object-fit: cover;
`;

export const ScheduleTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const ScheduleInfo = styled.p`
  font-size: 15px;
`;

export const Hr = styled.hr`
  margin: 10px 0px;
`;

export const WorshipDescription = styled.p`
  margin-top: 10px;
  font-size: 15px;
  font-weight: 400;
`;
