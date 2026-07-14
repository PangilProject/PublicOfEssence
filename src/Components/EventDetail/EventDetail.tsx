"use client";

import { Container100P100P } from "../BaseContainer";
import PageHero from "../PageHero";
import PhotoGallery from "./PhotoGallery";
import type { EventPhoto } from "../../views/WorshipPage/constants";
import {
  BackLink,
  DetailTop,
  PosterCard,
  DetailInfo,
  MetaList,
  MetaRow,
  MetaLabel,
  MetaValue,
  Verse,
  VerseRef,
  Story,
  SectionKicker,
  SectionTitle,
  PhotoSection,
  Pagination,
  PageCard,
  PageCardDisabled,
  PageDir,
  PageName,
} from "./styles";

export interface EventDetailLink {
  href: string;
  label: string;
}

export interface EventDetailProps {
  kicker: string;
  title: string;
  posterSrc: string;
  posterAlt: string;
  meta: { label: string; value: string }[];
  verse?: { text: string; reference: string };
  story: string[];
  photos?: EventPhoto[];
  backHref: string;
  backLabel: string;
  prev?: EventDetailLink;
  next?: EventDetailLink;
  /** prev/next 섹션 자체를 숨길 때 (일정처럼 항목이 하나뿐인 경우) */
  showPagination?: boolean;
}

function EventDetail({
  kicker,
  title,
  posterSrc,
  posterAlt,
  meta,
  verse,
  story,
  photos,
  backHref,
  backLabel,
  prev,
  next,
  showPagination = true,
}: EventDetailProps) {
  return (
    <Container100P100P>
      <BackLink href={backHref}>← {backLabel}</BackLink>
      <PageHero kicker={kicker} title={title} />

      <DetailTop>
        <PosterCard>
          <img src={posterSrc} alt={posterAlt} />
        </PosterCard>
        <DetailInfo>
          <MetaList>
            {meta.map((row) => (
              <MetaRow key={row.label}>
                <MetaLabel>{row.label}</MetaLabel>
                <MetaValue>{row.value}</MetaValue>
              </MetaRow>
            ))}
          </MetaList>

          {verse && (
            <Verse>
              “{verse.text}”<VerseRef>{verse.reference}</VerseRef>
            </Verse>
          )}

          {story.map((paragraph, index) => (
            <Story key={index}>{paragraph}</Story>
          ))}
        </DetailInfo>
      </DetailTop>

      {photos && photos.length > 0 && (
        <PhotoSection>
          <SectionKicker>PHOTO</SectionKicker>
          <SectionTitle>현장의 기록</SectionTitle>
          <PhotoGallery photos={photos} />
        </PhotoSection>
      )}

      {showPagination && (prev || next) && (
        <Pagination>
          {prev ? (
            <PageCard href={prev.href}>
              <PageDir>← 이전</PageDir>
              <PageName>{prev.label}</PageName>
            </PageCard>
          ) : (
            <PageCardDisabled>
              <PageDir>← 이전</PageDir>
              <PageName>준비 중</PageName>
            </PageCardDisabled>
          )}
          {next ? (
            <PageCard href={next.href}>
              <PageDir $align="right">다음 →</PageDir>
              <PageName $align="right">{next.label}</PageName>
            </PageCard>
          ) : (
            <PageCardDisabled>
              <PageDir $align="right">다음 →</PageDir>
              <PageName $align="right">준비 중</PageName>
            </PageCardDisabled>
          )}
        </Pagination>
      )}
    </Container100P100P>
  );
}

export default EventDetail;
