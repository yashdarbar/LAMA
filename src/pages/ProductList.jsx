import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;

const Title = styled.h1`
    margin: 25px 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: bold;
`;

const Select = styled.select`
    margin-left: 15px;
    padding: 10px;
`;
const Options = styled.option``;

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcements />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Filter Products :
                        <Select>
                            <Options disabled selected>
                                Color
                            </Options>
                            <Options>White</Options>
                            <Options>Yellow</Options>
                            <Options>Black</Options>
                            <Options>Red</Options>
                        </Select>
                        <Select>
                            <Options disabled selected>
                                Size
                            </Options>
                            <Options>M</Options>
                            <Options>L</Options>
                            <Options>XL</Options>
                            <Options>XXL</Options>
                        </Select>
                    </FilterText>
                </Filter>
                <Filter>
                    <FilterText>
                        Short Products :
                        <Select>
                            <Options selected>Newest</Options>
                            <Options>Price (asc)</Options>
                            <Options>Price (decs)</Options>
                        </Select>
                    </FilterText>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default ProductList;
