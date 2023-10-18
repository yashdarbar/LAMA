import { Badge, Search, ShoppingBagOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Navbar = () => {
    const Container = styled.div`
        height: 60px;
        font-size: 20px;
        background-color: yellow;
    `;

    const Wrapper = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
    `;

    const Left = styled.div`
        flex: 1;
        align-items: center;
        display: flex;
    `;
    const Right = styled.div`
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    `;

    const Centre = styled.div`
        flex: 1;
        text-align: center;
    `;
    const Language = styled.span`
        font-size: 14px;
        cursor: pointer;
    `;

    const SearchContainer = styled.div`
        display: flex;
        margin: 10px 20px;
        border: 1px solid black;
        margin-left: 25px;
        padding: 5px;
    `;

    const Input = styled.input`
        border: none;
    `;

    const Logo = styled.h1`
        font-weight: bolder;
    `;

    const MenuItem = styled.div`
        font-size: 14px;
        margin-left: 25px;
    `;

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{ color: "black", fontSize: "16" }} />
                    </SearchContainer>
                </Left>
                <Centre>
                    <Logo>LAMA.</Logo>
                </Centre>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={2} color="primary">
                            <ShoppingBagOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
