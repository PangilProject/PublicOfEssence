"use client";

import styled from "styled-components";
import Link from "next/link";
import ImageSlider from "./components/ImageSlider";
import { Container100P100P } from "../../Components/BaseContainer";
import YouTubeSlider from "./components/YoutubeSlider";
import { worshipList } from "../WorshipPage/constants";
import { SOCIAL_LINKS } from "../../../app/_lib/site";

function HomePage() {
  return (
    <Container100P100P>
      <SectionStack>
        {/* ① 미션 스테이트먼트 */}
        <MissionSection data-section="mission">
          <MissionKicker>WHO WE ARE</MissionKicker>
          <MissionTitle>
            시흥시 다음세대의 복음화를 위해{" "}
            <DesktopBr />
            청년과 청소년이 모인 사역 단체
          </MissionTitle>
          <VisionList>
            <VisionItem>
              <VisionNumber>01</VisionNumber>
              학교에 십자가를 세우는 세대
            </VisionItem>
            <VisionItem>
              <VisionNumber>02</VisionNumber>
              일상에 십자가를 세우는 세대
            </VisionItem>
            <VisionItem>
              <VisionNumber>03</VisionNumber>
              교회를 더욱 뜨겁게 섬기는 세대
            </VisionItem>
          </VisionList>
          <MoreLink href="/about">에센스 소개 보기 →</MoreLink>
        </MissionSection>

        <ImageSlider
          title="제11회 집회 '함께가자'"
          subtitle="11TH WORSHIP · PHOTO"
        />
        <YouTubeSlider
          title="10주년 감사예배 실황"
          subtitle="10TH ANNIVERSARY · LIVE WORSHIP"
        />

        {/* ③ 집회 타임라인 */}
        <TimelineSection data-section="timeline">
          <TimelineHeading>걸어온 길</TimelineHeading>
          <TimelineSub>11번의 집회, 하나의 이야기</TimelineSub>
          <TimelineList>
            {worshipList.map((item) => (
              <TimelineItem key={item.count}>
                <TimelineYear>{item.date.slice(0, 4)}</TimelineYear>
                <TimelineTopic>{item.topic}</TimelineTopic>
              </TimelineItem>
            ))}
          </TimelineList>
          <MoreLink href="/worship">집회 기록 전체 보기 →</MoreLink>
        </TimelineSection>

        {/* ⑥ CTA 밴드 */}
        <CtaSection data-section="cta">
          <CtaTitle>ESSENCE와 함께해요</CtaTitle>
          <CtaDesc>예배 실황과 소식은 SNS에서, 사역은 후원으로 함께할 수 있습니다.</CtaDesc>
          <CtaButtons>
            <CtaButton
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube 구독
            </CtaButton>
            <CtaButton
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </CtaButton>
            <CtaButtonAccent as={Link} href="/contact">
              후원 안내
            </CtaButtonAccent>
          </CtaButtons>
        </CtaSection>
      </SectionStack>
    </Container100P100P>
  );
}

// 섹션 사이 수직 여백
const SectionStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 1000px) {
    gap: 80px;
  }
`;

/* ① 미션 스테이트먼트 */
const MissionSection = styled.section`
  padding: 24px 0 8px;

  @media (max-width: 600px) {
    padding-top: 4px;
  }
`;

const MissionKicker = styled.p`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2.5px;
  color: #ff6347;
`;

const MissionTitle = styled.h2`
  margin-top: 12px;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.35;
  word-break: keep-all;

  @media (min-width: 1000px) {
    font-size: 40px;
  }
`;

// 모바일에서는 자연 줄바꿈, 데스크톱에서만 의도된 두 줄
const DesktopBr = styled.br`
  display: none;

  @media (min-width: 1000px) {
    display: inline;
  }
`;

const VisionList = styled.ol`
  margin-top: 20px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const VisionItem = styled.li`
  display: flex;
  align-items: baseline;
  gap: 10px;
  font-size: 15px;
  font-weight: 500;

  @media (min-width: 1000px) {
    font-size: 17px;
  }
`;

const VisionNumber = styled.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #ff6347;
`;

const MoreLink = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  font-size: 14px;
  font-weight: 600;
  color: black;
  text-decoration: none;
  transition: color 0.5s ease;

  &:hover {
    color: #ff6347;
  }
`;

/* ③ 집회 타임라인 */
const TimelineSection = styled.section``;

const TimelineHeading = styled.h2`
  font-size: 24px;
  font-weight: bold;

  @media (min-width: 1000px) {
    font-size: 30px;
  }
`;

const TimelineSub = styled.p`
  margin-top: 6px;
  font-size: 14px;
  font-weight: 300;
  color: #999;
`;

const TimelineList = styled.ol`
  margin-top: 24px;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px 40px;

  @media (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const TimelineItem = styled.li`
  display: flex;
  align-items: baseline;
  gap: 14px;
  padding-bottom: 12px;
  border-bottom: 1px solid #f0f0f0;
`;

const TimelineYear = styled.span`
  flex-shrink: 0;
  font-size: 13px;
  font-weight: 600;
  color: #ff6347;
  letter-spacing: 0.5px;
`;

const TimelineTopic = styled.span`
  font-size: 15px;
  font-weight: 500;
`;

/* ⑥ CTA 밴드 */
const CtaSection = styled.section`
  background-color: #111;
  border-radius: 20px;
  padding: 40px 24px;
  text-align: center;
`;

const CtaTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: white;

  @media (min-width: 1000px) {
    font-size: 26px;
  }
`;

const CtaDesc = styled.p`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.7);
`;

const CtaButtons = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
`;

const CtaButton = styled.a`
  padding: 10px 22px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  color: white;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const CtaButtonAccent = styled(CtaButton)`
  border-color: #ff6347;
  background-color: #ff6347;

  &:hover {
    background-color: white;
    border-color: white;
    color: black;
  }
`;

export default HomePage;
