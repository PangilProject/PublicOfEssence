"use client";

import { useRef, useState } from "react";
import type { ContactDetail, ContactInfo } from "../constants";
import {
  ContainerContactItem,
  ContactTitle,
  ContactSubTitle,
  ContactHr,
  ContactDetailRow,
  ContactDetailLabel,
  CopyTrigger,
  CopiedBadge,
} from "../styles";

/** 클릭하면 copyValue를 클립보드에 복사하는 값 표시 (복사 아이콘 포함) */
function CopyableValue({ detail }: { detail: ContactDetail }) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  const handleCopy = async () => {
    if (!detail.copyValue) return;
    try {
      await navigator.clipboard.writeText(detail.copyValue);
      setCopied(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 1500);
    } catch {
      // 클립보드 미지원 환경에서는 조용히 무시
    }
  };

  return (
    <CopyTrigger type="button" onClick={handleCopy} aria-label="계좌번호 복사">
      {detail.value}
      {copied ? (
        <CopiedBadge>복사됨!</CopiedBadge>
      ) : (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}
    </CopyTrigger>
  );
}

function ContactItem({ item }: { item: ContactInfo }) {
  return (
    <ContainerContactItem>
      <ContactTitle>{item.title}</ContactTitle>
      <ContactSubTitle>{item.subtitle}</ContactSubTitle>
      <ContactHr />
      {item.details.map((detail) => (
        <ContactDetailRow key={detail.label + detail.value}>
          <ContactDetailLabel>{detail.label}</ContactDetailLabel>
          {detail.href ? (
            <a href={detail.href}>{detail.value}</a>
          ) : detail.copyValue ? (
            <CopyableValue detail={detail} />
          ) : (
            detail.value
          )}
        </ContactDetailRow>
      ))}
    </ContainerContactItem>
  );
}

export default ContactItem;
