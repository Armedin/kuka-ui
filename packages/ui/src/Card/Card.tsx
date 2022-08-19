import styled from '@emotion/styled';
import { SxProps, styledSx } from '@kukui/system';
import React, { HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  sx?: SxProps;
}

const StyledCard = styled('div')(
  {
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
  },
  props => ({ ...styledSx(props) })
);

const Card = React.forwardRef<HTMLDivElement, CardProps>((inProps, ref) => {
  const { children, ...other } = inProps;
  return (
    <StyledCard className="KukuiCard" ref={ref} {...other}>
      {children}
    </StyledCard>
  );
});

export default Card;
