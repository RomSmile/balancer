import React from 'react';

export enum InputTypes {
  'text' = 0,
  'password' = 1,
}

export interface IInputWithLabel {
  label: string;
  inputPlaceHolder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: InputTypes;
}
