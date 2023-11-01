import React from "react";
import { Search, FavoriteBorder, ShoppingCartOutlined } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    min-width: 300px;
    height: 350px;
    position: relative;`

const Image = styled.img`
    height: 75%;`

const Info = styled.div`
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 3;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    `

const  Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4 ease;

    &:hover {
        background-color:white;
        transform: scale(1.1);
    }
    `

const Product = ({item}) => {
    return <Container>
        <Image src={item.img} />
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            <Icon>
                <Search />
            </Icon>
            <Icon>
                <FavoriteBorder />
            </Icon>
        </Info>
    </Container>;
};

export default Product;
