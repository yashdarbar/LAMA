import React from "react";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
    display: flex;
    padding: 50px;
    ${mobile({flexDirection: "column", padding: "0px"})};
`;

const ImgeContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 90%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height: "50vh", marginLeft: "20px"})}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 40px;
`;

const Title = styled.h1`
    font-size: 40px;
    font-weight: 300;
`;

const Decs = styled.p`
    font-size: 24px;
    margin: 30px 0px;
`;

const Price = styled.span`
    font-size: 40px;
`;

const FilterContainer = styled.div`
    display: flex;
    margin: 40px 0px;
    justify-content: space-between;
    width: 50%;
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
    ${mobile({margin: "0px 10px"})}
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 300;
`;

const FilterColor = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin-left: 10px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterOptions = styled.option``;

const AddContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    ${mobile({width: "100%"})}
`;

const AccountContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 24px;
`;

const Amount = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    border: 1px solid black;
    border-radius: 30%;
    padding: 10px;
    margin: 0px 10px;
    width: 15px;
    height: 15px;

`;

const Button = styled.button`
    font-size: 20px;
    padding: 10px 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;

    &:hover {
        background-color: #f8f4f4
    }

`;

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcements />
            <Wrapper>
                <ImgeContainer>
                    <Image src="../src/assets/images/pants-women.jpg" />
                </ImgeContainer>
                <InfoContainer>
                    <Title>Lose Pajama</Title>
                    <Decs>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Voluptatem natus quaerat adipisci autem amet
                        aperiam minus error nostrum ea officia suscipit, ipsam
                        ducimus vitae assumenda, culpa dolorem quo! Voluptate,
                        quisquam!
                    </Decs>
                    <Price>$40</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="gray" />
                            <FilterColor color="red" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterOptions>M</FilterOptions>
                                <FilterOptions>L</FilterOptions>
                                <FilterOptions>XL</FilterOptions>
                                <FilterOptions>XXL</FilterOptions>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AccountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AccountContainer>
                        <Button>Add to Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default Product;
