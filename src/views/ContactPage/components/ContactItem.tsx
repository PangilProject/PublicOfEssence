"use client";

import type { ContactInfo } from "../constants";
import {
  ContainerContactItem,
  ContactTitle,
  ContactSubTitle,
  ContactHr,
  ContactDetailRow,
  ContactDetailLabel,
} from "../styles";

function ContactItem({ item }: { item: ContactInfo }) {
  return (
    <ContainerContactItem>
      <ContactTitle>{item.title}</ContactTitle>
      <ContactSubTitle>{item.subtitle}</ContactSubTitle>
      <ContactHr />
      {item.details.map((detail) => (
        <ContactDetailRow key={detail.label + detail.value}>
          <ContactDetailLabel>{detail.label}</ContactDetailLabel>
          {detail.href ? <a href={detail.href}>{detail.value}</a> : detail.value}
        </ContactDetailRow>
      ))}
    </ContainerContactItem>
  );
}

export default ContactItem;
