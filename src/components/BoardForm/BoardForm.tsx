import React, { FC, useState } from 'react';
import { FormWrapper, Form, Label, StyledCalendar, FormItemWrapper, CloseButton } from './styled';
import { IBoardForm } from './types';
import { InputNumber } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { StyledButton } from '../../routes/BoardRoute/styled';
import useStore from '../../hooks/useStore';

const BoardForm: FC<IBoardForm> = ({ onClose, boardItem = null, onSaveCallBack = null, isAbsolute = true }) => {
  const { board } = useStore();
  const [month, setMonth] = useState<string>(boardItem ? boardItem.month : '01:2023');
  const [expenses, setExpenses] = useState<number>(boardItem ? boardItem.expenses : 0);
  const [profit, setProfit] = useState<number>(boardItem ? boardItem.profit : 0);
  const onPanelChange = (value: Dayjs) => {
    setMonth(`${value.month() + 1 < 10 ? `0${value.month() + 1}` : value.month() + 1}:${value.year()}`);
  };

  const changeExpenses = (value: number) => {
    setExpenses(value);
  };

  const changeProfit = (value: number) => {
    setProfit(value);
  };

  const onAdd = () => {
    if (boardItem) {
      board.editItem({
        key: boardItem.key,
        month,
        expenses,
        profit,
        ua: profit - expenses,
      });
    } else {
      board
        .addItem({
          month,
          expenses,
          profit,
          ua: profit - expenses,
        })
        .then(() => onSaveCallBack && onSaveCallBack());
    }
    onClose && onClose();
  };

  return (
    <FormWrapper isAbsolute={isAbsolute}>
      {onClose && (
        <CloseButton type="primary" shape="circle" danger onClick={onClose}>
          X
        </CloseButton>
      )}
      <Form>
        <FormItemWrapper>
          <Label>Please, choose the month:</Label>
          <StyledCalendar fullscreen={false} onChange={onPanelChange} mode="year" value={dayjs(month, 'MM:YYYY')} />
        </FormItemWrapper>
        <FormItemWrapper>
          <Label>Please, enter your expenses:</Label>
          <InputNumber min={0} max={999999} value={expenses} onChange={changeExpenses} />
        </FormItemWrapper>
        <FormItemWrapper>
          <Label>Please, enter your profit:</Label>
          <InputNumber min={0} max={999999} value={profit} onChange={changeProfit} />
        </FormItemWrapper>
        <StyledButton onClick={onAdd}>Add item</StyledButton>
      </Form>
    </FormWrapper>
  );
};

export default BoardForm;
