import styled from 'styled-components';
import { Button } from 'antd';

export const LoginWrapper = styled.div`
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
  padding-bottom: 30px;
  border-radius: 10px;

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
    background-color: #f53d6b;
    z-index: 1;
    border-radius: 10px 10px 0 0;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 50%;
    background-color: #fbb1c4;
    z-index: 1;
    border-radius: 0 0 10px 10px;
  }
`;

export const StyledLogo = styled.h2`
  font-size: 24px;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 0;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
`;

export const StyledButton = styled(Button)`
  width: 100px;
  align-self: flex-end;
  margin-top: 20px;
`;
