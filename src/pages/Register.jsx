import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url("../src/assets/images/bg-image.jpg") center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    width: 40%;
    padding: 30px;
    background-color: white;

`;

const Title = styled.h1`
    font-size:24px;
    font-weight: bold;`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0px;`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    font-size: 16px;
    margin: 10px 10px 0px 0px;
    padding:10px;`;

const Agreement = styled.div`
    font-size:14px;
    margin: 20px 0px;`;

const Button = styled.button`
    width:40%;
    padding: 10px 15px;
    color: white;
    background-color: teal;
    font-size: 20px;`;

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Create An Account</Title>
                <Form>
                    <Input placeholder="name"></Input>
                    <Input placeholder="last name"></Input>
                    <Input placeholder="email"></Input>
                    <Input placeholder="username"></Input>
                    <Input placeholder="password"></Input>
                    <Input placeholder="confirm password"></Input>
                </Form>
                <Agreement>
                    By creating an account. I consent to the processing of my
                    personal data in accordance with the <b>Privacy Policy</b>
                </Agreement>
                <Button>Create</Button>
            </Wrapper>
        </Container>
    );
};

export default Register;
