import React from 'react';
import { Space, Table, Tag } from 'antd';

const { Column, ColumnGroup } = Table;

const arr = [
  {
    key: 1,
    id: 'asdf',
    month: 'asdf',
    expenses: 0,
    profit: 1,
    ua: 22,
    usd: 22,
    eur: 22,
  },
];

//номер, місяць, прибуток, витрати, накопичення в гривні і накопичення в валюті

const Table = () => {
  return (
    <Table dataSource={arr}>
      <Column title="Number" dataIndex="key" key="key" />
      <Column title="Month" dataIndex="month" key="month" />
      <Column title="Expenses" dataIndex="expenses" key="expenses" />
      <Column title="Profit" dataIndex="profit" key="profit" />
      <ColumnGroup title="Accumulations">
        <Column title="UAN" dataIndex="ua" key="ua" />
        <Column title="USD" dataIndex="usd" key="usd" />
        <Column title="EUR" dataIndex="eur" key="eur" />
      </ColumnGroup>
    </Table>
  );
};

export default Table;
