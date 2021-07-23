import React from 'react';
import SectionHeader from './SectionHeader';
import styled from 'styled-components';
import Resume from './../static/documents/Courtney Fay - Frontend Web Developer - Resume.pdf'

const ConnectContainer = styled.div`
    display: flex;
    justify-content: space-around;
    height: 20vh;
    width: 100%;
    align-items: center;
    background-color: #f3f3f3;
`;

const ConnectItem = styled.p`
    color: #121212;
    text-align: center;
    width: 25%;
`;

const ConnectLink = styled.a`
    font-weight: 600;
    font-size: 1.25em;
    display: block;
    margin: 1em;
    transition: all 0.2s;
    color: #121212;
`;

const Connect = () => {
    return (
        <>
            <SectionHeader
                text='connect'
            />
            <ConnectContainer>
                <ConnectItem>
                    Email me
                    <ConnectLink
                        href="mailto:fay.courtney@gmail.com"
                        rel="noopener noreferrer"
                    >
                        fay.courtney@gmail.com
                    </ConnectLink>
                </ConnectItem>
                <ConnectItem>
                    Follow me on Github
                    <ConnectLink
                        href="https://github.com/courtneyfay"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        @courtneyfay
                    </ConnectLink>
                </ConnectItem>
                <ConnectItem>
                    Download &#8964;
                    <ConnectLink
                        href={Resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                    >
                        my resume
                    </ConnectLink>
                </ConnectItem>
                <ConnectItem>
                    Send me a message on LinkedIn
                    <ConnectLink
                        href="https://www.linkedin.com/in/faycourtney/"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                    >
                        /in/faycourtney
                    </ConnectLink>
                </ConnectItem>
            </ConnectContainer>
        </>
    )
};

export default Connect;
