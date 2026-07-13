"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { MyLink } from "../../Components/MyLink";
import {
  ContainerHeader,
  ContainerLogo,
  LogoContainer,
  LogoImage,
  MenuItem,
  MenuItemList,
  MobileMenuButton,
  MobileOverlay,
  OverlayTop,
  OverlayLogoLink,
  OverlayLogo,
  OverlayClose,
  OverlayList,
  OverlayLink,
  OverlaySocial,
} from "./styles";
import essenceLogoRed from "../../assets/images/EssenceLogoRed.png";
import essenceLogo from "../../assets/images/EssenceLogo.png";

const MENU = [
  { href: "/about", label: "About" },
  { href: "/worship", label: "Worship" },
  { href: "/schedule", label: "Schedule" },
  { href: "/resource", label: "Resource" },
  { href: "/contact", label: "Contact" },
];

function Header() {
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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

      {/* 데스크톱 메뉴 */}
      <MenuItemList>
        {MENU.map((item) => (
          <MyLink key={item.href} href={item.href}>
            <MenuItem>{item.label}</MenuItem>
          </MyLink>
        ))}
      </MenuItemList>

      {/* 모바일: 메뉴 버튼 → 풀스크린 오버레이 */}
      <MobileMenuButton
        type="button"
        onClick={() => setMenuOpen(true)}
        aria-label="메뉴 열기"
      >
        <span />
        <span />
      </MobileMenuButton>

      {menuOpen && (
        <MobileOverlay>
          <OverlayTop>
            <OverlayLogoLink href="/" onClick={() => setMenuOpen(false)}>
              <OverlayLogo src={essenceLogo.src} alt="Essence Logo" />
            </OverlayLogoLink>
            <OverlayClose
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="메뉴 닫기"
            >
              ✕
            </OverlayClose>
          </OverlayTop>

          <OverlayList>
            <OverlayLink
              href="/"
              $active={pathname === "/"}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </OverlayLink>
            {MENU.map((item) => (
              <OverlayLink
                key={item.href}
                href={item.href}
                $active={pathname.startsWith(item.href)}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </OverlayLink>
            ))}
          </OverlayList>

          <OverlaySocial>
            <a
              href="https://www.youtube.com/channel/UCwzG4MH4hI9GUm9iJcq0sLQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Youtube
            </a>
            <a
              href="https://www.instagram.com/essence_2015/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </OverlaySocial>
        </MobileOverlay>
      )}
    </ContainerHeader>
  );
}
export default Header;
