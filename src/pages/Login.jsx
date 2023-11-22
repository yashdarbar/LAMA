import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.5)
        ),
        url("../src/assets/images/bg-image.jpg") center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 30px;
    background-color: white;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 15px 0px;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    font-size: 16px;
    margin: 10px 10px 0px 0px;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    padding: 10px;
    color: white;
    background-color: teal;
    font-size: 16px;
    margin-top: 10px;
`;

const Link = styled.a`
    margin: 10px 0px;
    cursor: pointer;
    font-weight: 200;
    text-decoration: underline;`;


const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="name"></Input>
                    <Input placeholder="username"></Input>
                    <Button>LOGIN</Button>
                    <Link>Do not remember the password ?</Link>
                    <Link>Create a new account</Link>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Login;
