import React from 'react';
import { technologies } from './content';
import {
  AboutBlockWrapper,
  ContentBody,
  ContentHeader,
  ContentWrapper,
  DeveloperImage,
  MainInfoBlock,
  MainInfoRow,
  ResumeLink,
  ResumeTitle,
  StyledCollapse,
} from './styled';

const AboutRoute = () => {
  return (
    <AboutBlockWrapper>
      <ContentWrapper>
        <ContentHeader>
          <DeveloperImage src="/developer.jpg" />
          <MainInfoBlock>
            <ResumeTitle>Roman Yacenko Front-end developer</ResumeTitle>
            <MainInfoRow isBold={true}>2 years of commercial experience</MainInfoRow>
            <MainInfoRow>Phone: +380960873218</MainInfoRow>
            <MainInfoRow>
              Mail:{' '}
              <ResumeLink href="mailto:ryacenko3@gmail.com" target="_blank">
                ryacenko3@gmail.com
              </ResumeLink>
            </MainInfoRow>
            <MainInfoRow>
              Github link:{' '}
              <ResumeLink href="https://github.com/RomSmile" target="_blank">
                RomSmile
              </ResumeLink>
            </MainInfoRow>
            <MainInfoRow>
              Linkedin link:{' '}
              <ResumeLink href="https://www.linkedin.com/in/roman-yacenko-dreamdeveloper/" target="_blank">
                Roman Yacenko
              </ResumeLink>
            </MainInfoRow>
            <MainInfoRow>
              Telegram link:{' '}
              <ResumeLink href="https://t.me/R0mannnnnnn" target="_blank">
                @R0mannnnnnn
              </ResumeLink>
            </MainInfoRow>
          </MainInfoBlock>
        </ContentHeader>
        <ContentBody>
          <StyledCollapse size="middle" items={technologies} />
        </ContentBody>
      </ContentWrapper>
    </AboutBlockWrapper>
  );
};

export default AboutRoute;
