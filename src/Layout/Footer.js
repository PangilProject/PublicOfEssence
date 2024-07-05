import styled from "styled-components";
import AutoPlayAudio from "../Components/AutoPlayAudio";
function Footer() {

    return (
        <div>
            <ContainerFooter>
                <LogoImage src="/Img/EssenceLogo.png" alt="Logo Image in Fotter"/>

                <WrapperFotter>
                    <WrapperFooterLeft>
                        <FooterP>
                            ESSENCE(에센스, 시흥시 청소년 기독교 동아리 연합)
                        </FooterP>
                        <FooterP>
                            ⓒESSENCE. 2024.All rights reserved.
                        </FooterP>
                    </WrapperFooterLeft>

                    <WrapperFooterRight>
                        <a href="https://www.facebook.com/profile.php?id=100064473554394">
                            <OutsideLink>Facebook</OutsideLink>
                        </a>
                        <a href="https://www.youtube.com/channel/UCwzG4MH4hI9GUm9iJcq0sLQ">
                            <OutsideLink>Youtube</OutsideLink>
                        </a>
                        <a href="https://www.instagram.com/essence_2016/">
                            <OutsideLink>Instargram</OutsideLink>
                        </a>
                    </WrapperFooterRight>
                </WrapperFotter>
            </ContainerFooter>

            <AutoPlayAudio/>
        </div>
    );
}

const ContainerFooter = styled.div `

    width: 100%;
    height : 100px;
    margin-top: 100px;
    display: flex; 
    flex-direction: column;
    padding-bottom: 30px;
    /* background-color: red; */

    
`;

const WrapperFotter = styled.div `
    width :100%;
    height : 100%;

    display: flex;
    /* background-color: blue; */
`;

const LogoImage = styled.img `   
    width: 100px;
    /* height : 30px; */
    @media (min-width : 1000px) {
        height : 35px
    }
    padding-bottom: 10px;
    /* background-color: yellow; */
`

const FooterP = styled.p `
    padding : 0;
    margin : 0;
    font-size: 15px;
    color : gray;
    @media (max-width : 480px){
        font-size: 13px;
    }
`

const WrapperFooterLeft = styled.div `
    width: 70%;
    @media (min-width : 1000px){
        width: 50%;
    }
`
const WrapperFooterRight = styled.div `
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: end;
    /* background-color: aliceblue; */
    
    @media (min-width : 1000px) {
        width: 50%;
        justify-content: end;
        flex-direction: row;
        align-items: start;
    }

    & > a {
        color : black;
        text-decoration: none;
        font-size : 15px;
        transition: color 0.5s ease;
        font-weight: bold;
        &:hover{
            color : #ff6347;
        }
        @media (max-width : 550px){
        }
    }
`

const OutsideLink = styled.div `
    margin-bottom: 10px;

    @media (min-width : 1000px){
        margin: 0px 20px;
    }
`
export default Footer;