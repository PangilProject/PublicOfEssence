"use client";

import {
  ContainerFooter,
  TopRow,
  Brand,
  LogoImage,
  BrandDesc,
  LinkColumn,
  ColumnTitle,
  FooterExternalLink,
  BottomRow,
} from "./styles";
import { SOCIAL_LINKS } from "../../../app/_lib/site";

import essenceLogo from "../../assets/images/EssenceLogo.png";

const SOCIAL = [
  { href: SOCIAL_LINKS.youtube, label: "Youtube" },
  { href: SOCIAL_LINKS.instagram, label: "Instagram" },
  { href: SOCIAL_LINKS.facebook, label: "Facebook" },
];

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <ContainerFooter>
      <TopRow>
        <Brand>
          <LogoImage src={essenceLogo.src} alt="ESSENCE 로고" />
          <BrandDesc>
            시흥시 다음세대의 복음화를 위해 청년과 청소년이 모인 사역
            단체입니다.
          </BrandDesc>
        </Brand>

        <LinkColumn>
          <ColumnTitle>SOCIAL</ColumnTitle>
          {SOCIAL.map((item) => (
            <FooterExternalLink
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </FooterExternalLink>
          ))}
        </LinkColumn>
      </TopRow>

      <BottomRow>
        ⓒ {currentYear} ESSENCE(에센스). All rights reserved.
      </BottomRow>
    </ContainerFooter>
  );
}
export default Footer;
