import styled from "styled-components";
import { Container100P100P } from "../HomePage/HomePage";
import React, { useState } from "react";

function WorshipPage() {
    
    const [hoveredItem, setHoveredItem] = useState(null);

    const worshipList = [
       {
            count: 1,
            date: "",
            place: "",
            color: "",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpzgtlrWtooIJlV3GesOXvGget-_MINuRK9g&usqp=CAU",
            description: "",
            topic : ""
        },{
            count: 2,
            date: "",
            place: "",
            color: "",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpzgtlrWtooIJlV3GesOXvGget-_MINuRK9g&usqp=CAU",
            description : "",
            topic : ""
        },
        {
            count: 3,
            date: "2018-01-27",
            place: "사랑스러운교회",
            color: "pink",
            image: "https://scontent-gmp1-1.xx.fbcdn.net/v/t31.18172-8/26678002_1774290529258305_2137422878338652571_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KTJirBaQ-NAQ7kNvgE6hzKx&_nc_ht=scontent-gmp1-1.xx&oh=00_AYALOnyexpLD6wg_H4mh9Cagcn61Xnt3iBwM1_yKuisWKw&oe=66750514",
            description : "찬양으로 마음을 따뜻하게 녹여보세요. 우리 함께하는 찬양 집회에서 하나님의 사랑과 영광을 함께 느껴보세요. 찬양으로 우리를 하나로 이어주는 특별한 시간을 만나러 오세요!",
            topic : "학교에 십자가를 세우는 세대",
        },  {
            count: 4,
            date: "2018-08-04",
            place: "여의도순복음 시흥교회",
            image: "https://scontent-gmp1-1.xx.fbcdn.net/v/t1.6435-9/37175658_1992083597478996_7965071070099144704_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0r0eDmnRmE4Q7kNvgHqjXof&_nc_ht=scontent-gmp1-1.xx&oh=00_AYChzvAdK4BRD7x0HJKn5PGBeT3101ZNuz9DclTWnbnfbw&oe=66750786",
            color : "green",
            description : "하나님의 영광이 충만한 찬양 집회! 지금 바로 등록하세요. 찬양의 소리로 마음을 채우고, 하나님의 사랑과 기쁨을 함께 나누는 특별한 시간을 놓치지 마세요. 당신의 찬양이 기다립니다!",
            topic : "오직 예수",
        }, {
            count: 5,
            date: "2019-01.12",
            place: "시흥 평안교회",
            image: "https://scontent-gmp1-1.xx.fbcdn.net/v/t1.6435-9/49948202_2249527301734623_6940028763576991744_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=s-4LoIpS458Q7kNvgFABe7u&_nc_ht=scontent-gmp1-1.xx&oh=00_AYAVq6yBJzLosmf5hR78vW4ZT9AT9guQCczOrCm7LKUgIA&oe=6674F2FF",
            color : "yellow",
            description : "찬양으로 마음을 가득 채우는 순간, 당신의 영혼은 춤을 추게 됩니다. 하나님의 영광을 함께 나누고, 사랑과 희망이 넘치는 찬양 집회에 여러분을 초대합니다. 지금 등록하세요!",
            topic : "부르심, 낮은 곳으로",
        },{
            count: 6,
            date: "2020-01-18",
            place: "정왕동 광진교회",
            image: "https://scontent-gmp1-1.xx.fbcdn.net/v/t1.6435-9/81337285_2963271147026898_4087605123897884672_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Q5PKTDdxdYgQ7kNvgGzQMRp&_nc_ht=scontent-gmp1-1.xx&oh=00_AYByKCk2WkL87lcTavJfVNHhiHLfcoVvMNLxHufZbL6J3w&oe=6674FFA4",
            color : "blue",
            description : "찬양의 소리가 우리를 하나로 모으는 곳, 찬양 집회에 참여하세요! 하나님의 사랑과 영광이 넘치는 찬양으로 영혼을 채우고, 새로운 희망과 기쁨을 만나보세요. 함께 하실 건가요?",
            topic : "Who Am I?",
        }, {
            count: 7,
            date: "",
            place: "",
            color: "",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpzgtlrWtooIJlV3GesOXvGget-_MINuRK9g&usqp=CAU",
            description : "",
            topic : "",
        },
    ]

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
                                <ItemInfo color = "white">
                                    <WorshipData>일자 | {value.date}</WorshipData>
                                    <WorshipPlace>장소 | {value.place}</WorshipPlace>
                                    <Hr/>
                                    <WorshipTopic><strong>[주제]</strong> {value.topic} </WorshipTopic>
                                    <WorshipDescription>{value.description}</WorshipDescription>
                                </ItemInfo> : 
                                <ItemInfo color = "black">
                                    <WorshipCount>{value.count}회</WorshipCount>
                                    <WorshipImage src = {value.image}></WorshipImage>
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
    justify-content: space-around;

`;

const WorshipInfoItem = styled.div `

    width: 300px;
    height : 400px;
    /* background-color: ${props => (props.backgroundColor)}; */
    border-radius: 20px;
    margin-top : 15px;
    padding : 20px;
    box-sizing: border-box;

    transition: background-color 0.5s ease;

    border : 2px solid #333;

    &:last-child{
        margin-bottom : 15px;
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
    font-size: 35px;
    font-weight: bold;
`;

const WorshipImage = styled.img`
    width: 100%;
    height : 300px;
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