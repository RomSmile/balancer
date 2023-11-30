import React, { FC, useMemo } from 'react';
import { Input, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { IInputWithLabel, InputTypes } from './types';
import { LabelWrapper } from './styled';

const InputWithLabel: FC<IInputWithLabel> = ({ label, inputPlaceHolder, onChange, type }) => {
  const returnedInput = useMemo(() => {
    switch (type) {
      case InputTypes['text']:
        return <Input size="large" placeholder={inputPlaceHolder} prefix={<UserOutlined />} onChange={onChange} />;

      case InputTypes['password']:
        return <Input.Password size="large" placeholder={inputPlaceHolder} onChange={onChange} />;

      default:
        return 'something went wrong...';
    }
  }, [type]);

  return (
    <LabelWrapper>
      <Typography.Title level={5}>{label}</Typography.Title>
      {returnedInput}
    </LabelWrapper>
  );
};

export default InputWithLabel;
