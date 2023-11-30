import styled from 'styled-components';
import { Table } from 'antd';
import { colors } from '../../../../static';

export const StyledTable = styled(Table)`
  position: relative;
  z-index: 0;

  & thead th.ant-table-cell {
    background: ${colors.primaryGreen};
  }

  & thead td.ant-table-cell {
    background: ${colors.primaryGreen};
  }

  & tbody td.ant-table-cell {
    background: ${colors.lightGreen} !important;
  }
`;
