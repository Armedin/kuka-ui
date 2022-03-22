import React from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
  color?: 'primary';
  fullWidth?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

const SIconButton = styled('button')({
  padding: '8px',
  height: '36px',
  width: '36px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  outline: 0,
  cursor: 'pointer',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  msUserSelect: 'none',
  userSelect: 'none',
  verticalAlign: 'middle',
  MozAppearance: 'none',
  WebkitAppearance: 'none',
  textDecoration: 'none',
  color: 'inherit',
  fontFamily: 'inherit',
  fontWeight: 500,
  fontSize: '1rem',
  borderRadius: '50%',
  border: 'none',
  backgroundColor: 'transparent',
  transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
});

const IconButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (inProps, ref) => {
    const { children, ...other } = inProps;
    return <SIconButton {...other}>{children}</SIconButton>;
  }
);

IconButton.displayName = 'IconButton';

export default IconButton;
