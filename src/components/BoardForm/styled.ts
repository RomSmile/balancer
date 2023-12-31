import styled from 'styled-components';
import { Button, Calendar } from 'antd';
import { IFormWrapper } from './types';
import { colors } from '../../static';

export const FormWrapper = styled.div<IFormWrapper>`
  ${({ isAbsolute }) =>
    isAbsolute
      ? `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `
      : `
      margin: 0 auto;
      position: relative;
      margin-top: 20px;
    `}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 600px;
  background-color: transparent;
  z-index: 1;
  padding: 15px 0;

  & * {
    z-index: 2;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 50%;
    background-color: ${colors.primaryBlue};
    z-index: 1;
    border-radius: 15px 15px 0 0;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 50%;
    background-color: ${colors.lightBlue};
    z-index: 1;
    border-radius: 0 0 15px 15px;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  padding: 20px 0;
`;

export const Label = styled.p`
  margin-top: 0;
`;

export const StyledCalendar = styled(Calendar)`
  & .ant-radio-button-wrapper {
    display: none;
  }

  & .ant-select-dropdown {
    z-index: 3;
  }
`;

export const FormItemWrapper = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

export const CloseButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
  margin-top: 0;
`;
