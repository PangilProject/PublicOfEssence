import React, {useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import { MyLink } from "../Components/MyLink";

function Header() {
    const [logoSrc, setLogoSrc] = useState("/Img/EssenceLogo.png");

    return (
        <ContainerHeader>
            <MyLink to="/">
                <LogoImage
                    src={logoSrc}
                    alt="Essence Logo Image"
                    onMouseEnter={() => setLogoSrc("/Img/EssenceLogoRed.png")}
                    onMouseLeave={() => setLogoSrc("/Img/EssenceLogo.png")}/>
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

const ContainerHeader = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MenuItemList = styled.div `
    display: flex;
    justify-content: row;
`;

const MenuItem = styled.div `
    width: 100px;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    line-height: 20px;

    &:hover {
        color: #ff6347;
    }
`;

const LogoImage = styled.img `
    height: 50px;
`;

export default Header;
