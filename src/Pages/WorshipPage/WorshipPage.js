import styled from "styled-components";
import { Container100P100P } from "../HomePage/HomePage";
import React, { useState } from "react";
import { worshipList } from "./WorshipListInfo";

function WorshipPage() {
    
    const [hoveredItem, setHoveredItem] = useState(null);

    const emptyImage = "https://ryeon0720.blogpay.io/img/img_noimg.png";


    return (
        <Container100P100P>
            <ContainerWorshipList>
                {
                    worshipList.map((value, index) => (
                        <WorshipInfoItem
                            key={index}
                            id={index}
                            // backgroundColor={value.color}
                            onMouseEnter={() => setHoveredItem(index)}
                            onMouseLeave={() => setHoveredItem(null)}>
                            {hoveredItem === index ?
                                <ItemInfo color="white">
                                    <WorshipData>일자 | {value.date}</WorshipData>
                                    <WorshipPlace>장소 | {value.place}</WorshipPlace>
                                    <Hr />
                                    <WorshipTopic><strong>[주제]</strong> {value.topic} </WorshipTopic>
                                    <WorshipDescription>{value.description}</WorshipDescription>
                                </ItemInfo> :
                                <ItemInfo color="black">
                                    <WorshipCount>{value.count}회</WorshipCount>
                                    <WorshipImage src={value.image == "" ? emptyImage : value.image}></WorshipImage>
                                </ItemInfo>
                            }
                        </WorshipInfoItem>
                    ))
                }
            </ContainerWorshipList>
        </Container100P100P>
    );
}

const ContainerWorshipList = styled.div `
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const WorshipInfoItem = styled.div `

    width: 300px;
    height : 400px;
    /* background-color: ${props => (props.backgroundColor)}; */
    border-radius: 20px;
    margin-bottom : 15px;
    padding : 20px;
    box-sizing: border-box;

    margin: 0px 25px 50px 25px;

    transition: background-color 0.5s ease;

    border : 1.5px solid #36363650;

    @media (min-width : 1000px){
        &:nth-child(3n+1){
            margin-left: 0;
        }
        &:nth-child(3n){
            margin-right: 0;
            margin-bottom : 15px;
        }
    }

    &:hover {
        background-color: #333; /* 호버 시 배경색 변경 */
    }
`;

const ItemInfo = styled.div`

    display: flex;
    flex-direction: column;
    color : ${props => (props.color)};

`;

const WorshipCount = styled.p`
    font-size: 30px;
    font-weight: bold;
`;

const WorshipImage = styled.img`
    width: 100%;
    height : 315px;
    background-color: red * 0.05;
    margin-top: 10px;

    border-radius: 15px;
    overflow: hidden;
    object-fit: cover;
`;

const WorshipPlace = styled.p`
    font-size: 20px;
    font-weight: bold;
`;

const WorshipData = styled.p`
    font-size: 20px;;
    font-weight: bold;
`;

const WorshipTopic = styled.p`
    font-size: 15px;;
`;

const Hr = styled.hr`
    margin : 10px 0px;
`

const WorshipDescription = styled.p`
    margin-top: 10px;
    font-size : 15px;
    font-weight: 400;
`;
export default WorshipPage;