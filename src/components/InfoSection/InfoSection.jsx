import React from 'react'
import { Link } from 'react-router-dom';

import { Button, Container } from '../../globalStyle';
import InfoSec, { Heading, Img, InfoColumn, InfoRow, Subtitle, TextWrapper, TopLine } from './InfoSection.element';

export default function InfoSection({ lightBg, imgStart, lightTopLine,
    lightTextDesc, buttonLabel, description, headline, lightText,
    topLine, primary, img, alt, start }) {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                <Link to="/sign-up">
                                    <Button big fontBig primary={primary}>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>

                        <InfoColumn>
                            <TextWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </TextWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}
