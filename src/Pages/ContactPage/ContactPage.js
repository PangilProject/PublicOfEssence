import styled from "styled-components";
import { Container100P100P } from "../HomePage/HomePage";

function ContactPage() {

    const ContactList = [
        {
            title: '일반 문의',
            subtitle: 'General Inquiry',
            email : '준비중@example.com',
        },
        {
            title: '재정후원 문의',
            subtitle: 'Donation',
            email : '준비중@example.com',
        },
    ]
    return (
        <Container100P100P>
            <ContainerMenu>
                {ContactList.map((value, index) => (
                    <ContainerContactItem key={index}>
                        <ContactTitle>{value.title}</ContactTitle>
                        <ContactSubTitle>{value.subtitle}</ContactSubTitle>
                        <ContactEmail>{value.email}</ContactEmail>
                    </ContainerContactItem>
                )) }
            </ContainerMenu>
        </Container100P100P>
    );
}

const ContainerMenu = styled.div`
    width: 100%;
    height : 150px;
    /* background-color: red; */

    display: flex;
`;

const ContainerContactItem = styled.div`
    width: 50%;
    height : 100%;
    box-sizing: border-box;
    /* background-color: yellow; */

    display: flex;
    flex-direction: column;
`;

const ContactTitle = styled.p`
    font-size: 20px;
    font-weight: bold;
`;

const ContactSubTitle = styled.p`
    font-size: 15px;
    font-weight: 200;
    color : #333;
    margin-top: 40px;
`;

const ContactEmail = styled.p`
    font-size: 15px;
    font-weight: 300;

    margin-top: 10px;
`;
export default ContactPage;