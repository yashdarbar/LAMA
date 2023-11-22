import React from "react";
import Announcements from "../components/Announcements";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div`
padding: 20px;`;

const Title = styled.h1`
font-weight: bold;
text-align: center;`;

const Top = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;`;

const TopButton = styled.button
`font-size:20px;
padding: 10px;
margin: 0px 10px;`

const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcements />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <TopButton>Check Out</TopButton>
                </Top>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Cart;
