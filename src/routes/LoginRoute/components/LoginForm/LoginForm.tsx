import React, { useState } from 'react';
import { Form, LoginWrapper, StyledButton, StyledLogo } from './styled';
import { InputWithLabel } from '../../../../components';
import { InputTypes } from '../../../../components/InputWithLabel/types';
import { message } from 'antd';
import useStore from '../../../../hooks/useStore';
import { Navigate, redirect } from 'react-router-dom';

const LoginForm = () => {
  const { userAccess } = useStore();
  const [messageApi, contextHolder] = message.useMessage();
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const changeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = () => {
    if (login !== process.env.REACT_APP_LOGIN || password !== process.env.REACT_APP_PASSWORD) {
      messageApi.open({
        type: 'error',
        content: 'Your login or password is not correct',
        duration: 3,
      });
      return;
    }

    userAccess.allowToEnterInSystem();
  };

  if (userAccess.allowEnter || localStorage.getItem('allowEnter') === '1') {
    redirect('/');
  }

  return (
    <>
      {(userAccess.allowEnter || localStorage.getItem('allowEnter') === '1') && <Navigate to={'/'} />}
      {contextHolder}
      <LoginWrapper>
        <StyledLogo>balancer</StyledLogo>
        <Form>
          <InputWithLabel
            label="Enter your login"
            inputPlaceHolder="login..."
            onChange={changeLogin}
            type={InputTypes['text']}
          />
          <InputWithLabel
            label="Enter your password"
            inputPlaceHolder="password..."
            onChange={changePassword}
            type={InputTypes['password']}
          />
          <StyledButton size="large" onClick={onSubmit}>
            Enter
          </StyledButton>
        </Form>
      </LoginWrapper>
    </>
  );
};

export default LoginForm;
