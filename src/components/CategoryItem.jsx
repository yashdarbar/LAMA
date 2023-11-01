import { Padding } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
    height: 70vh;
    width: 100%;
    margin: 3px;
    display: flex;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ImageInfo = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`
const Button = styled.button`
    background-color:white;
    border: none;
    padding: 10px;
    color: gray;
    font-weight: 600;
    cursor: pointer;`

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <ImageInfo>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </ImageInfo>
        </Container>
    );
};

export default CategoryItem;
