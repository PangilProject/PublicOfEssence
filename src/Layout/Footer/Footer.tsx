"use client";

import {
  ContainerFooter,
  FooterP,
  LogoImage,
  OutsideLink,
  WrapperFooterLeft,
  WrapperFooterRight,
  WrapperFotter,
} from "./styles";

import essenceLogo from "../../assets/images/EssenceLogo.png";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <ContainerFooter>
      <LogoImage src={essenceLogo.src} alt="Logo Image in Fotter" />

      <WrapperFotter>
        <WrapperFooterLeft>
          <FooterP>ESSENCE(에센스, 시흥시 다음세대 기도모임)</FooterP>
          <FooterP>ⓒESSENCE. {currentYear}.All rights reserved.</FooterP>
        </WrapperFooterLeft>

        <WrapperFooterRight>
          <a
            href="https://www.facebook.com/profile.php?id=100064473554394"
            target="_blank"
            rel="noopener noreferrer"
          >
            <OutsideLink>Facebook</OutsideLink>
          </a>

          <a
            href="https://www.youtube.com/channel/UCwzG4MH4hI9GUm9iJcq0sLQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <OutsideLink>Youtube</OutsideLink>
          </a>

          <a
            href="https://www.instagram.com/essence_2015/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <OutsideLink>Instagram</OutsideLink>
          </a>
        </WrapperFooterRight>
      </WrapperFotter>
    </ContainerFooter>
  );
}
export default Footer;
