import React from 'react';
import { InstructionsWrapper, Title, StyledCollapse } from './styled';
import { content } from './content';

const instructionsRoute = () => {
  return (
    <InstructionsWrapper>
      <Title>Instructions</Title>
      <StyledCollapse size="large" accordion items={content} />
    </InstructionsWrapper>
  );
};

export default instructionsRoute;
