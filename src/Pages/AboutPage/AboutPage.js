import styled from "styled-components";
import {Container100P100P} from "../HomePage/HomePage";

function AboutPage() {

    return (
        <Container100P100P>
            <WrapperRow>
                <ContainerQuestion>
                    <Question>Essence는</Question>
                </ContainerQuestion>
                <ContainerAnswer>
                    <Answer>
                        경기도 시흥시에 위치한 여러 고등학교의 기독교 동아리가 연합하여 예배를 준비하고 찬양 집회를 진행하는 사역 단체입니다. 하나님을 찬양하고,
                        예배하며, 시흥시에 위치한 여러 고등학교에 복음을 전하기 위해 힘쓰고자 하는 학생들이 모여 있습니다. 한 해에 한 번씩 집회를 준비해오는 구조로
                        진행되어 왔으며, 다양한 부서를 구성하고 집회를 위한 열심을 기울여 왔습니다.
                    </Answer>
                    <Answer>
                        집회를 위해서는 많은 노력들이 필요했습니다. 여러 고등학교에 있는 기독교 동아리를 알아야 했고, 해마다 변화되는 동아리에 대한 상황 공유도
                        필요했습니다. 무엇보다 인원들을 모으는 것을 더 넘어서 찬양 집회를 준비하기 위한 장소 대여 및 찬양팀 연습, 콰이어 연습 등 다양한 노력들이
                        필요했습니다. 감사하게도 하나님의 인도하심에 따라 이 모든 것들이 감사와 은혜로 이루어졌고, 지금까지 약 7회의 집회를 준비할 수 있었습니다.
                    </Answer>
                </ContainerAnswer>
            </WrapperRow>
            <WrapperRow>
                <ContainerQuestion>
                    <Question>COVID-19로 인해</Question>
                </ContainerQuestion>
                <ContainerAnswer>
                    <Answer>
                        Essence는 어려움이 찾아왔습니다. 학생들이 학교를 가기 어려웠으며, 그로 인해서 동아리 운영에 제한이 생기며 자연스럽게 기독교 동아리 또한
                        없어지거나 중단되는 경우가 잦았습니다. 또한, 단체로 모이는 활동 자체에 큰 제약이 생기게 되었으며, 그로 인해 전체적인 운영이 어려워진 시기가
                        있었습니다.
                    </Answer>
                    <Answer>
                        하지만 Essence는 이러한 상황 속에서도 흐름이 끊기지 않기 위해 노력했습니다. 이전에 Essence 집회를 참여하고 준비했던 학생들이 모여
                        '서포터즈' 라는 이름으로 운영을 이어 나갔으며, 현재는 약 4~50명에 가까운 인원들이 서포터즈로 활동하고 있습니다. 또한, 2023년
                        2월에는 '중심'이라는 주제로 찬양 집회가 진행되었고, 이후 Essence의 방향성과 발걸음은 점점 나아져가기 시작했습니다.
                    </Answer>
                </ContainerAnswer>
            </WrapperRow>
            <WrapperRow>
                <ContainerQuestion>
                    <Question>앞으로는</Question>
                </ContainerQuestion>
                <ContainerAnswer>
                    <Answer>
                        다시 시흥시 청소년 연합예배가 시흥시 땅 가운데 진행되고, 서포터즈가 주축이 되는 것이 아닌 학생들이 주축이 되어 찬양이 흘러나고, 예배의
                        뜨거움이 전해질 수 있는 것이 가장 큰 목표입니다. 이를 위해서는 많은 분들의 중보와 관심이 필요합니다. 함께 중보해주시면 감사하겠습니다.
                    </Answer>
                </ContainerAnswer>
            </WrapperRow>
        </Container100P100P>
    );
}

const WrapperRow = styled.div `
    width: 100%;
    height : auto;

    display: flex;
    /* padding-top : 50px; */
    box-sizing: border-box;

    margin-bottom: 100px;

    &:last-child{
        margin-bottom: 0px;
    }

    @media (max-width : 480px){
        display: flex;
        flex-direction: column;
    }
`;

const ContainerQuestion = styled.div `
    width: 40%;
    @media (min-width : 1000px){
            width: 30%;
    }
    @media (max-width : 480px){
        width: 100%;
    }

`;

const ContainerAnswer = styled.div `
    width: 60%;
    @media (min-width : 1000px){
            width: 70%;
    }
    @media (max-width : 480px){
        width: 100%;
        margin-top: 20px;
    }
`;

const Question = styled.p `
    font-size: 25px;
    font-weight: bold;

    @media (min-width : 1000px){
        font-size: 35px;
    }
`;

const Answer = styled.p `
    font-size: 15px;
    line-height: 25px;

    margin-bottom: 10px;

    @media (min-width : 1000px){
            font-size: 18px;
    }

    &:last-child {
        margin-bottom: 0px;
    }
`
export default AboutPage;