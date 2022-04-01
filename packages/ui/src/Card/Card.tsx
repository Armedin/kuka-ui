import styled from '@emotion/styled';
import React from 'react';

const StyledCard = styled('div')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  minWidth: 0,
  wordWrap: 'break-word',
  backgroundColor: '#fff',
  backgroundClip: 'border-box',
  border: '1px solid #eff2f5',
  borderRadius: '0.475rem',
  boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
});

const Card = ({ children }: { children?: React.ReactNode }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
