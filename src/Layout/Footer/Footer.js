import AutoPlayAudio from "../../Components/AutoPlayAudio";
import {
  ContainerFooter,
  FooterP,
  LogoImage,
  OutsideLink,
  WrapperFooterLeft,
  WrapperFooterRight,
  WrapperFotter,
} from "./styles";

function Footer() {
  return (
    <div>
      <ContainerFooter>
        <LogoImage src="/Img/EssenceLogo.png" alt="Logo Image in Fotter" />

        <WrapperFotter>
          <WrapperFooterLeft>
            <FooterP>ESSENCE(에센스, 시흥시 청소년 기독교 동아리 연합)</FooterP>
            <FooterP>ⓒESSENCE. 2025.All rights reserved.</FooterP>
          </WrapperFooterLeft>

          <WrapperFooterRight>
            <a
              href="https://www.facebook.com/profile.php?id=100064473554394"
              target="_blank"
            >
              <OutsideLink>Facebook</OutsideLink>
            </a>
            <a
              href="https://www.youtube.com/channel/UCwzG4MH4hI9GUm9iJcq0sLQ"
              target="_blank"
            >
              <OutsideLink>Youtube</OutsideLink>
            </a>
            <a href="https://www.instagram.com/essence_2016/" target="_blank">
              <OutsideLink>Instargram</OutsideLink>
            </a>
          </WrapperFooterRight>
        </WrapperFotter>
      </ContainerFooter>

      <AutoPlayAudio />
    </div>
  );
}
export default Footer;
