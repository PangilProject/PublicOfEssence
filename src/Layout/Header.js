import React, { useState } from "react";
import styled from "styled-components";
import { MyLink } from "../Components/MyLink";

function Header() {
    const [hovered, setHovered] = useState(false);

    return (
        <ContainerHeader>
            <ContainerLogo>
                <MyLink to="/">
                    <LogoContainer
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        <LogoImage
                            src="/Img/EssenceLogoRed.png"
                            alt="Essence Logo Image"
                            hovered={hovered}
                        />
                        <LogoImage
                            src="/Img/EssenceLogo.png"
                            alt="Essence Logo Red Image"
                            hovered={!hovered}
                        />
                    </LogoContainer>
                </MyLink>
            </ContainerLogo>
            <MenuItemList>
                <MyLink to="/about">
                    <MenuItem>About</MenuItem>
                </MyLink>
                <MyLink to="/worship">
                    <MenuItem>Worship</MenuItem>
                </MyLink>
                <MyLink to="/schedule">
                    <MenuItem>Schedule</MenuItem>
                </MyLink>
                <MyLink to="/contact">
                    <MenuItem>Contact</MenuItem>
                </MyLink>
            </MenuItemList>
        </ContainerHeader>
    );
}

const ContainerHeader = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    @media (min-width : 1000px){
        align-items: center;
    }
    align-items: start;

    @media (max-width : 550px){
        display: block;
    }
`;


const ContainerLogo = styled.div`
    width: 50%;
`
const MenuItemList = styled.div`
    display: flex;
    justify-content: row;
`;

const MenuItem = styled.div`
    @media (max-width : 550px){
        text-align: left;
        margin-left: 0;
        margin-right: 15px;
        font-size: 15px;
    }
    text-align: right;
    font-size: 20px;
    font-weight: 500;
    /* line-height: 20px; */
    transition: color 0.5s ease;

    margin-left: 30px;

    &:hover {
        color: #ff6347;
    }
    
`;

const LogoContainer = styled.div`
    position: relative;
    height: 50px;
`;

const LogoImage = styled.img`
    position: absolute;
    height: 30px;
    transition: opacity 0.5s ease;
    opacity: ${(props) => (props.hovered ? 1 : 0)};

    @media (min-width : 1000px) {
        height : 50px
    }
`;

export default Header;
