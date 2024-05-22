import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MyLink } from "../Components/MyLink";

function Header() {
    const [hovered, setHovered] = useState(false);

    return (
        <ContainerHeader>
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
            <MenuItemList>
                <MyLink to="/">
                    <MenuItem>Home</MenuItem>
                </MyLink>

                <MyLink to="/worship">
                    <MenuItem>Worship</MenuItem>
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
    align-items: center;
`;

const MenuItemList = styled.div`
    display: flex;
    justify-content: row;
`;

const MenuItem = styled.div`
    width: 100px;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    /* line-height: 20px; */
    transition: color 0.5s ease;

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
