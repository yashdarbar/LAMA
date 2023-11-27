
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data"
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #ffffff;
    position: relative;
    overflow: hidden;
    ${mobile({display: "none"})}

`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: rgba(211, 211, 211, 0.15);
    z-index:2;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.2s ease;
    transform: translateX(${props=>props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    height: 100%;
`;

const ImageInfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
    font-weight: bolder;
`;

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    letter-spacing: 3px;
    font-weight: bold;
`;

const Button = styled.button`
    font-size: 20px;
    background-color: transparent;
    padding: 10px;
    cursor: pointer;
`;

const Slider = () => {


    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction ==="left") {setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)}
        else {setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)}
    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((sliderItem) => (
                    <Slide>
                    <ImageContainer>
                        <Image src={sliderItem.img}/>
                    </ImageContainer>
                    <ImageInfoContainer>
                        <Title>{sliderItem.title}</Title>
                        <Desc>{sliderItem.desc}</Desc>
                        <Button>SHOP NOW</Button>
                    </ImageInfoContainer>
                </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    );
};

export default Slider;
