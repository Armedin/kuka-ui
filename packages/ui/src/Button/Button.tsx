import React from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
  color?: 'primary';
  fullWidth?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

const StyledButton = styled('button')<ButtonProps>(props => ({
  padding: '0 13px',
  height: '36px',
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
  fontSize: '0.875rem',
  minWidth: '64px',
  borderRadius: '8px',
  border: 'none',
  transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  ...(props.fullWidth && {
    width: '100%',
  }),
  ...(props.color && {
    backgroundColor: `var(--kuka-${props.color})`,
    color: '#fff',
  }),
}));
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (inProps, ref) => {
    const { children, disabled, ...other } = inProps;

    return (
      <StyledButton ref={ref} disabled={disabled} {...other}>
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';

Button.defaultProps = {
  color: 'primary',
};

export default Button;
