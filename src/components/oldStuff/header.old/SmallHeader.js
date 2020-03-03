import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { device } from '../../styles/responsive';
import { Container } from '../../styles/Container';

const SmallHeader = ({ title, desc, picture }) => {
    return (
        <SmallHeadContainer picture={picture}>
            <HeaderOverlay>
                <Container>
                    <Fade bottom>
                        <HeaderTitle> {title} </HeaderTitle>
                    </Fade>
                    <Fade bottom delay='500'>
                        <HeaderDesc> {desc} </HeaderDesc>
                    </Fade>
                </Container>
            </HeaderOverlay>
        </SmallHeadContainer>
    );
};

const SmallHeadContainer = styled.header`
    width: 100%;
    height: 30vh;
    background: url(${props => props.picture});
    background-repeat: no-repeat;
    background-position: left top;
    background-size: cover;
`;

const HeaderOverlay = styled.div`
    background-image: linear-gradient(
        to left,
        rgba(0, 168, 232, 0.5),
        rgba(0, 52, 89, 0.9)
    );
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const HeaderTitle = styled.h2`
    color: ${theme.colorWhiteBck};
    font-size: ${theme.fontSizeXXL};
    text-align: center;
    padding-bottom: 3rem;
`;

const HeaderDesc = styled.p`
    color: ${theme.colorWhiteBck};
    font-size: ${theme.fontSizeM};
    font-weight: 300;
    text-align: center;
`;

export default SmallHeader;
