import React from 'react';
import { BoardForm } from '../../components';
import { message } from 'antd';
import useStore from '../../hooks/useStore';

const BoardSettingsRoute = () => {
  const { board } = useStore();
  const [messageApi, contextHolder] = message.useMessage();

  const onSave = () => {
    if (board.error.length) {
      messageApi
        .open({
          type: 'error',
          content: board.error,
          duration: 3,
        })
        .then(() => board.resetError());
    } else {
      messageApi.open({
        type: 'success',
        content: 'Success!',
        duration: 3,
      });
    }
  };

  return (
    <>
      {contextHolder}
      <BoardForm onClose={null} onSaveCallBack={onSave} isAbsolute={false} />
    </>
  );
};

export default BoardSettingsRoute;
