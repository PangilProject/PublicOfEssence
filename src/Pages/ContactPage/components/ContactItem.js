import React from "react";
import {
  ContainerContactItem,
  ContactTitle,
  ContactSubTitle,
  ContactEmail,
} from "../styles";

function ContactItem({ item }) {
  return (
    <ContainerContactItem>
      <ContactTitle>{item.title}</ContactTitle>
      <ContactSubTitle>{item.subtitle}</ContactSubTitle>
      <ContactEmail>{item.email}</ContactEmail>
    </ContainerContactItem>
  );
}

export default ContactItem;
