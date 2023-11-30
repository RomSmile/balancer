import styled from 'styled-components';
import { Collapse } from 'antd';

export const InstructionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 28px;
  align-self: flex-start;
`;

export const StyledCollapse = styled(Collapse)`
  & .ant-collapse-header {
    background: #70d1ff;
  }

  & .ant-collapse-content-box {
    background: #ade4ff;
  }
`;
