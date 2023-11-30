import styled from 'styled-components';
import { Button, Calendar } from 'antd';

export const FormWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
    background-color: #70d1ff;
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
    background-color: #ade4ff;
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
