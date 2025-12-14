import React, { useState } from "react";
import { MyLink } from "../../Components/MyLink";
import {
  ContainerHeader,
  ContainerLogo,
  LogoContainer,
  LogoImage,
  MenuItem,
  MenuItemList,
} from "./styles";
import essenceLogoRed from "../../assets/images/EssenceLogoRed.png";
import essenceLogo from "../../assets/images/EssenceLogo.png";

function Header() {
  const [hovered, setHovered] = useState(false);
  return (
    <ContainerHeader>
      <ContainerLogo>
        <MyLink to="/">
          <LogoContainer>
            <LogoImage
              src={essenceLogoRed}
              alt="Essence Logo Red Image"
              hovered={hovered}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            />
            <LogoImage
              src={essenceLogo}
              alt="Essence Logo Image"
              hovered={!hovered}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
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
export default Header;
