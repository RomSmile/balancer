import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Table, Space, message } from 'antd';
import useStore from '../../../../hooks/useStore';
import BoardForm from '../../../../components/BoardForm';
import { IBoardItem, updateOrderItemParams } from '../../../../types';
import { StyledTable } from './styled';

const { Column, ColumnGroup, Summary } = Table;

const Board = () => {
  const { board } = useStore();
  const [messageApi, contextHolder] = message.useMessage();
  const [editItemParams, setEditItemParams] = useState<updateOrderItemParams>(null);

  const onClose = () => {
    setEditItemParams(null);
  };

  const onEdit = (record: IBoardItem) => {
    const { key, ua, profit, month, expenses } = record;
    setEditItemParams({ key, expenses, profit, month, ua });
  };

  useEffect(() => {
    if (board.error.length) {
      messageApi
        .open({
          type: 'error',
          content: board.error,
          duration: 3,
        })
        .then(() => board.resetError());
    }
  }, [board.error]);

  return (
    <>
      {contextHolder}
      {editItemParams && <BoardForm onClose={onClose} boardItem={editItemParams} />}
      <StyledTable loading={board.loading} dataSource={board.items.toJSON()} pagination={false}>
        <Summary.Row>
          <Column title="Number" dataIndex="key" key="key" />
          <Column title="Month" dataIndex="month" key="month" />
          <Column title="Expenses" dataIndex="expenses" key="expenses" />
          <Column title="Profit" dataIndex="profit" key="profit" />
          <ColumnGroup title="Accumulations">
            <Column title="UAN" dataIndex="ua" key="ua" />
            <Column title="USD" dataIndex="usd" key="usd" />
            <Column title="EUR" dataIndex="eur" key="eur" />
          </ColumnGroup>
        </Summary.Row>
        <Column
          title="Action"
          key="action"
          render={(_, record: IBoardItem) => (
            <Space size="middle">
              <a onClick={() => onEdit(record)}>Edit {record.month}</a>
              <a onClick={() => board.deleteItem(record.id)}>Delete</a>
            </Space>
          )}
        />
      </StyledTable>
    </>
  );
};

export default observer(Board);
