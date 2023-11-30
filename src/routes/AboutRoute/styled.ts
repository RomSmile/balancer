import styled from 'styled-components';
import { IMainRow } from './types';
import { Collapse } from 'antd';

export const AboutBlockWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 20px auto 0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: #dff8ea;
  border-radius: 10px;
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 30px;
  background: #b2eecc;
  margin-bottom: 20px;
  padding: 20px 30px;
  border-radius: 10px 10px 0 0;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const DeveloperImage = styled.img`
  width: 100%;
  max-width: 300px;
  @media screen and (max-width: 600px) {
    max-width: 500px;
  }
`;

export const MainInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ResumeTitle = styled.h1`
  font-size: 21px;
`;

export const ResumeLink = styled.a`
  text-decoration: none;
  color: #1677ff;
  transition: color 0.3s;

  &:hover {
    color: #000;
  }
`;

export const MainInfoRow = styled.p<IMainRow>`
  ${({ isBold }) => isBold && 'font-weight: 600;'}
  margin: 5px 0;
`;

export const ContentBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 20px;
`;

export const StyledCollapse = styled(Collapse)`
  & .ant-collapse-header {
    background: #70d1ff;
  }

  & .ant-collapse-content-box {
    background: #ade4ff;
  }
`;
