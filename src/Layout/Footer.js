import styled from "styled-components";

function Footer() {
    
    return (
        <ContainerFooter>
                <WrapperFooterLeft>
                    <LogoImage src="/Img/EssenceLogo.png" alt="Logo Image in Fotter" />
                    <FooterP>
                        ESSENCE(에센스, 시흥시 청소년 기독교 동아리 연합)
                    </FooterP>
                    <FooterP>
                        ⓒESSENCE. 2024.All rights reserved.
                        </FooterP>
                </WrapperFooterLeft>
                <WrapperFooterRight>
                    <a href = "https://www.facebook.com/profile.php?id=100064473554394"><OutsideLink>Facebook</OutsideLink></a>
                    <a href = "https://www.youtube.com/channel/UCwzG4MH4hI9GUm9iJcq0sLQ"><OutsideLink>Youtube</OutsideLink></a>
                    <a href = "" onClick={() => alert("준비중")}><OutsideLink>Instargram</OutsideLink></a>
                </WrapperFooterRight>
            </ContainerFooter>
    );

}

const ContainerFooter = styled.div`

    width: 100%;
    height : 100px;
    margin-top: 100px;

    display: flex;
    
`

const LogoImage = styled.img`
    height : 30px;
    @media (min-width : 1000px) {
        height : 35px
    }
    padding : 5px 0px;
`

const FooterP = styled.p`
    padding : 0;
    margin : 0;
    font-size: 15px;
    color : gray;
`

const WrapperFooterLeft = styled.div`
    width: 70%;
    @media (min-width : 1000px){
        width: 50%;
    }
`
const WrapperFooterRight = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: end;

    
    @media (min-width : 1000px) {
        width: 50%;
        align-items: center;
        justify-content: end;
        flex-direction: row;
    }

    & > a {
        color : black;
        text-decoration: none;
        font-size : 15px;
        transition: color 0.5s ease;
        &:hover{
            color : #ff6347;
        }
    }
`

const OutsideLink = styled.div`
    margin-bottom: 10px;

    @media (min-width : 1000px){
        margin: 0px 20px;
    }
`
export default Footer;