import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
    font-size: 1.25em;
`;

const Name = styled.h1`
    font-size: 3.5em;
    font-weight: 600;
`;

const HeroContainer = styled.section`
    // TODO: remove this background-color when there's an actual hero image
    background-color: green;    
    color: white;
    text-align: right;
    position: relative;
    min-height: 300px;
    height: auto;
    padding-right: 3%;
    padding-top: 8%;
    width: 100%;
`;

const HeroImage = () => {
    return (
        // TODO: hero image goes here
        <HeroContainer>
            <Text>Hey! My name is</Text>
            <Name>Courtney Fay</Name>
            <Text>VR Developer in Denver, CO</Text>
        </HeroContainer>
    );
};

export default HeroImage;
