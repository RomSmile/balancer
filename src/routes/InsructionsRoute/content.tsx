import { CollapseProps } from 'antd';
import React from 'react';

export const content: CollapseProps['items'] = [
  {
    key: '1',
    label: 'What the on the page "Board"?',
    children: (
      <p>
        This is a table that gets your expenses and your profit for the month. As a result, it counts your savings in
        hryvnia and converts this amount into dollars and euros.
      </p>
    ),
  },
  {
    key: '2',
    label: 'What the information in table?',
    children: (
      <>
        <p>Table includes this data</p>
        <ul>
          <li>The first column (Number) - number of table item</li>
          <li>The second column (Month) - month of table item that according to your expenses</li>
          <li>The third column (Expenses) - your expenses through entered month</li>
          <li>The fourth column (Profit) - your profit through entered month</li>
          <li>The fifth column (Accumulations) - your savings through entered month in different currencies</li>
          <li>The sixth column (Actions) - your options that you can do with table item</li>
        </ul>
      </>
    ),
  },
  {
    key: '3',
    label: 'How to add info in table?',
    children: (
      <>
        <p>Follow this steps</p>
        <ul>
          <li>Go to the page {`"Settings"`}</li>
          <li>Choose your month</li>
          <li>Enter expenses through this month</li>
          <li>Enter profit through this month</li>
          <li>And click button {`"Add new item"`}</li>
        </ul>
      </>
    ),
  },
  {
    key: '4',
    label: 'Technologies that use in this app',
    children: (
      <>
        <p>For development</p>
        <ul>
          <li>React.js</li>
          <li>Typescript</li>
          <li>React-router</li>
          <li>mobx-state-tree</li>
          <li>styled-components</li>
          <li>ant-design</li>
        </ul>
        <p>For linter:</p>
        <ul>
          <li>Eslint</li>
          <li>Prettier</li>
        </ul>
      </>
    ),
  },
];
