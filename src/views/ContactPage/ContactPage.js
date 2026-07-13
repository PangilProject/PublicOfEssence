import { Container100P100P } from "../../Components/BaseContainer";
import { ContactList } from "./constants";
import ContactItem from "./components/ContactItem";
import { ContainerMenu } from "./styles";

function ContactPage() {
  return (
    <Container100P100P>
      <ContainerMenu>
        {ContactList.map((item, index) => (
          <ContactItem key={index} item={item} />
        ))}
      </ContainerMenu>
    </Container100P100P>
  );
}
export default ContactPage;
