import React, { useState } from 'react';
import Board from './components/Board';
import { BoardWrapper } from './styled';
import { BoardForm } from '../../components';

const BoardRoute = () => {
  const [showBoardForm, setShowBoardForm] = useState<boolean>(false);
  const onClose = () => {
    setShowBoardForm(false);
  };

  // const onOpen = () => {
  //   setShowBoardForm(true);
  // };

  return (
    <>
      {showBoardForm && <BoardForm onClose={onClose} />}
      <BoardWrapper>
        <Board />
        {/*<StyledButton onClick={onOpen}>Add new Item</StyledButton>*/}
      </BoardWrapper>
    </>
  );
};

export default BoardRoute;
