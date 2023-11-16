import { Facebook, Instagram, Mail, Phone, Room, Twitter } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    padding: 20px;
`;

const Left = styled.div`
    flex: 1;
    padding: 20px;
    flex-direction: column;
`;
const LeftLogo = styled.h1`
    font-weight: 600;
`;
const Para = styled.p`
    padding: 20px 0px;
    font-weight: 600;
    font-size: 18px;
`;
const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    color: white;
    background-color: #${(prop) => prop.color};
`;
const Center = styled.div`
    flex: 1;
    padding: 20px;
`;
const CenterTitle = styled.h3`
margin-bottom:30px;
font-weight:800;
`;
const Lists = styled.ul`
margin-top:10px;
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;
const ListItem = styled.li`
font-weight: 800;
width: 50%;
margin-bottom: 20px;`;


const Right = styled.div`
    flex: 1;
    padding: 20px;
    margin-right: 30px;
`;
const ContactItem = styled.div`
    font-weight: 700;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <LeftLogo>LAMA.</LeftLogo>
                <Para>
                    There are many variations of passages of lorem ipsum
                    available but the majority have suffered alteration in some
                    form, by injected humor or randomised words which dont look
                    even slightly belivable.
                </Para>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <CenterTitle>Useful Links</CenterTitle>
                <Lists>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Acessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </Lists>
            </Center>
            <Right>
                <CenterTitle>Contact</CenterTitle>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }} />
                    622 Dixie Path, South Tobinchester 98336
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: "10px" }} />
                    +12345678
                </ContactItem>
                <ContactItem>
                    <Mail style={{ marginRight: "10px" }} />
                    contact@iama.dev
                </ContactItem>
            </Right>
        </Container>
    );
};

export default Footer;
