import styled from 'styled-components';
import { Table } from 'antd';

export const StyledTable = styled(Table)`
  position: relative;
  z-index: 0;

  & thead th.ant-table-cell {
    background: #b2eecc;
  }

  & thead td.ant-table-cell {
    background: #b2eecc;
  }

  & tbody td.ant-table-cell {
    background: #dff8ea !important;
  }
`;
