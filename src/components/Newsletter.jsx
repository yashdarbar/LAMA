import { Send } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    height:50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;

const Title = styled.h1`
    font-size: 70px;
    margin-bottom:20px;
    ${mobile({fontSize:"50px"})}
`;

const Desc = styled.div`
    font-size: 24px;
    margin-bottom: 30px;
    font-weight: bold;
    letter-spacing: 0.5px;
    ${mobile({fontSize:"16px",justifyContent: "center"})}

`;

const ImageContainer = styled.div`
    width: 50%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    border: none;
`;
const Input = styled.input`
    flex: 7;
    font-size:16px;
    padding-left: 15px;
    border: 1px solid lightgrey;`;

const Button = styled.button`
    flex: 1;
    background-color: teal;
    color: white;
    border: none;`;

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely updates from your favorite products.</Desc>
            <ImageContainer>
                <Input placeholder="Your email"/>
                    <Button >
                        <Send />
                    </Button>
            </ImageContainer>
        </Container>
    );
};

export default Newsletter;
