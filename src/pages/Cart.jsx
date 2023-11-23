import React from "react";
import Announcements from "../components/Announcements";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: bold;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

const TopButton = styled.button`
    font-size: 20px;
    padding: 10px;
    margin: 0px 10px;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) =>
        props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => (props.type === "filled" ? "white" : "black")};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
    font-size: 18px;
    font-weight: bold;
    margin: 0px 10px;
    text-decoration: underline;
    cursor: pointer;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProductDetail = styled.div`
    display: flex;
    flex: 2;
`;

const Image = styled.img`
    width: 200px;
    margin-right: 10px;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 20px;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductSize = styled.span``;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ProductAmount = styled.div`
    display: flex;
    align-items: center;
    margin: 10px;
`;

const Amount = styled.div`
    font-size: 24px;
    margin: 0px 5px;
`;

const Price = styled.div`
    font-size: 40px;
    margin-top: 10px;
`;

const Summary = styled.div`
    flex: 1;
    height: 40vh;
    border: 0.5px solid gray;
    border-radius: 15px;
    padding: 20px;
`;

const SummaryTitle = styled.h1`
font-weight: bold;
font-size:40px;
margin-bottom: 10px;`;

const SummaryItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    font-size: ${props => props.type === "total" && "24px"};
    font-weight: ${props => props.type === "total" && "bold"};
`;

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
    width: 80%;
    height: 40px;
    margin-top: 30px;
    padding: 10px 15px;
    background-color: black;
    color: white;
    font-size: 16px;
    cursor: pointer;
    `;

const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcements />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Your WishList(2)</TopText>
                        <TopText>Shopping Bag(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CheckOut Now</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="../src/assets/images/cart-image.jpg" />
                                <Details>
                                    <ProductName>
                                        <b>Product :</b> T-shirt
                                    </ProductName>
                                    <ProductId>
                                        <b>Id :</b> 45876
                                    </ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize>
                                        <b>Size :</b> L
                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmount>
                                    <Add />
                                    <Amount>2</Amount>
                                    <Remove />
                                </ProductAmount>
                                <Price>$ 25</Price>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>
                                Estimated Shipping
                            </SummaryItemText>
                            <SummaryItemPrice>$ 5</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shopping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Checkout Now</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Cart;
