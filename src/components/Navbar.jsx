import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import React from "react";
import styled from "styled-components";
import {mobile} from "../responsive";

const Navbar = () => {
    const Container = styled.div`
        height: 60px;
        font-size: 20px;
        background-color: white;
        ${mobile({height:"50px"})};

    `;

    const Wrapper = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        ${mobile({height:"50px", padding: "5px 0px"})};
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
        ${mobile({justifyContent:"center", flex: "2", marginLeft: "0px"})};
    `;

    const Centre = styled.div`
        flex: 1;
        text-align: center;
        ${mobile({margin: "5px"})};
    `;

    const Language = styled.span`
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        ${mobile({display:"none"})};
    `;

    const SearchContainer = styled.div`
        display: flex;
        margin: 10px 20px;
        border: 1px solid black;
        margin-left: 25px;
        padding: 5px;
        ${mobile({margin:"0px 10px", padding: "5px 0px"})}
    `;

    const Input = styled.input`
        border: none;
        ${mobile({width:"40px", paddingLeft:"5px"})};
    `;

    const Logo = styled.h1`
        font-weight: bolder;
        ${mobile({fontSize:"24px"})};
    `;

    const MenuItem = styled.div`
        font-size: 14px;
        font-weight: bold;
        margin-left: 25px;
        ${mobile({fontSize:"10px",marginLeft: "10px"})}
    `;

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search"/>
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
                        <Badge badgeContent={5} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
