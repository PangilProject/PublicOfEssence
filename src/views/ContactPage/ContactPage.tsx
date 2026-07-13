"use client";

import { Container100P100P } from "../../Components/BaseContainer";
import PageHero from "../../Components/PageHero";
import { ContactList } from "./constants";
import ContactItem from "./components/ContactItem";
import { ContainerMenu } from "./styles";

function ContactPage() {
  return (
    <Container100P100P>
      <PageHero kicker="CONTACT" title="문의 및 후원 안내" />
      <ContainerMenu>
        {ContactList.map((item, index) => (
          <ContactItem key={index} item={item} />
        ))}
      </ContainerMenu>
    </Container100P100P>
  );
}
export default ContactPage;
