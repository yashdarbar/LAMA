import React from "react";
import styled from "styled-components";

const about = () => {
    const mainContainer = styled.div`
        display: flex;
        flex: flex-row;
        height: 100vh;
        width: 100vw;
    `;

    const Image = styled.div`
        margin: 50px auto;
        margin-bottom: 0px;
        width: 50%;
        justify-content: center;
    `;

    const Img = styled.img`
        height: 200px;
        object-fit: cover;
        width: 200px;
        border-radius: 40%;
        border: 3px solid black;
        display: inline-flex;
    `;

    const Desc = styled.div`
    margin: 50px auto;
    width: 50%;
    height: 500px:
    justify-content: center;
    align-items: center;
`;

const Heading = styled.div`
    margin: 50px auto;
    font-size: 38px;
    font-weight: 900;
    margin-bottom:10px;`

const SubHeading = styled.div`
    margin-top: 20px;
    font-size:24px;
    font-weight: 600;
`;

const Para = styled.p`
    margin-top: -45px;
    font-size: 24px;
    align-items: center;
    line-height:35px;`;

    const Info = styled.div`
    margin-left:10px;
    margin-top:10px;
    font-size: 24px;
    font-weight:500;
    align-items: center;
    `

    const Name = styled.div`
        font-weight: 1000;
    `;
    const Web = styled.div`
        font-weight: 1000;
    `;

    return (
        <mainContainer>
            <Image>
                    <Img src="pfp.jpg"></Img>
                    <Info>
                        <Name>Yash Darbar</Name>
                        <Web>Web Developer</Web>

                    </Info>
                <Heading>Namaste!!</Heading>
                <SubHeading>About me...</SubHeading>
            </Image>
            <Desc>
                <Para>
                    I am a second-year Information Technology student pursuing a
                    B.Tech degree. As i'm a passionate web developer with
                    expertise in HTML, JavaScript, CSS, and React. I thrive on
                    creating engaging and responsive web applications. My
                    proficiency extends to using Tailwind CSS, Postman, and
                    Sanity to enhance the development process.
                    <br />
                    Currently delving
                    into Next.js, I am always eager to embrace new technologies
                    and stay at the forefront of web development trends.
                </Para>
            </Desc>
        </mainContainer>
    );
};

export default about;
