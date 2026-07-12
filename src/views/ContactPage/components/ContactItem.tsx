"use client";

import type { ContactInfo } from "../constants";
import {
  ContainerContactItem,
  ContactTitle,
  ContactSubTitle,
  ContactEmail,
} from "../styles";

function ContactItem({ item }: { item: ContactInfo }) {
  return (
    <ContainerContactItem>
      <ContactTitle>{item.title}</ContactTitle>
      <ContactSubTitle>{item.subtitle}</ContactSubTitle>
      <ContactEmail>{item.email}</ContactEmail>
    </ContainerContactItem>
  );
}

export default ContactItem;
