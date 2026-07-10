"use client";

import { useState } from "react";
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
        <MyLink href="/">
          <LogoContainer>
            <LogoImage
              src={essenceLogoRed.src}
              alt="Essence Logo Red Image"
              $hovered={hovered}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            />
            <LogoImage
              src={essenceLogo.src}
              alt="Essence Logo Image"
              $hovered={!hovered}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            />
          </LogoContainer>
        </MyLink>
      </ContainerLogo>

      <MenuItemList>
        <MyLink href="/about">
          <MenuItem>About</MenuItem>
        </MyLink>
        <MyLink href="/worship">
          <MenuItem>Worship</MenuItem>
        </MyLink>
        <MyLink href="/schedule">
          <MenuItem>Schedule</MenuItem>
        </MyLink>
        <MyLink href="/resource">
          <MenuItem>Resource</MenuItem>
        </MyLink>
        <MyLink href="/contact">
          <MenuItem>Contact</MenuItem>
        </MyLink>
      </MenuItemList>
    </ContainerHeader>
  );
}
export default Header;
