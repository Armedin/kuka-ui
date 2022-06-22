import React from 'react';
import styled from '@emotion/styled';

interface IconButtonProps {
  color?: 'primary';
  fullWidth?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  size?: 'inherit' | 'large' | 'medium' | 'small';
}

const IconButtonRoot = styled('button')<IconButtonProps>(props => ({
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
  fontSize: '24px',
  borderRadius: '50%',
  border: 'none',
  backgroundColor: 'transparent',
  transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',

  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
  ...(props.size === 'small' && {
    fontSize: '18px',
    width: '28px',
    height: '28px',
  }),
  ...(props.size === 'large' && {
    fontSize: '28px',
  }),
}));

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (inProps, ref) => {
    const { children, size = 'medium', ...other } = inProps;
    return (
      <IconButtonRoot
        type="button"
        className="KukuiIconButton"
        size={size}
        {...other}
      >
        {children}
      </IconButtonRoot>
    );
  }
);

IconButton.displayName = 'IconButton';

export default IconButton;
