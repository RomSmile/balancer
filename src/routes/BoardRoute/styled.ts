import styled from 'styled-components';
import { Button } from 'antd';

export const BoardWrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  overflow-x: scroll;
  padding-bottom: 15px;
`;

export const StyledButton = styled(Button)`
  margin-top: 10px;
  width: 150px;
  align-self: flex-end;
`;
