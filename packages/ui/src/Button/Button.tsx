import React from 'react';
import styled from '@emotion/styled';
import { shouldForwardProp, styledSx, SxProps } from '@kukui/system';

export interface ButtonProps {
  color?: 'primary' | 'secondary' | 'inherit';
  sx?: SxProps;
  variant?: 'text' | 'contained';
  size?: 'small' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClick?: (event: any) => void;
  type?: 'button' | 'reset' | 'submit';
}

const IGNORED_PROPS = ['color', 'fullWidth', 'variant', 'size'];

export const StyledButton = styled('button', {
  shouldForwardProp: prop =>
    shouldForwardProp(prop) && !IGNORED_PROPS.includes(prop as any),
})<ButtonProps>(props => ({
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
  ...(props.color !== 'inherit' &&
    props.variant === 'contained' && {
      backgroundColor: `var(--kukui-${props.color})`,
      color: `var(--kukui-${props.color}-text)`,
      '&:hover': {
        backgroundColor: `var(--kukui-${props.color}-hover)`,
      },
    }),
  ...(props.variant === 'text' && {
    backgroundColor: `transparent`,
    color: 'var(--kukui-text-default)',
    '&:hover': {
      backgroundColor: `var(--kukui-accent-50)`,
    },
  }),
  ...(props.size === 'small' &&
    props.variant === 'text' && {
      padding: '6px 10px',
      fontSize: '13px',
    }),
  ...styledSx(props),
}));

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (inProps, ref) => {
    const {
      children,
      variant = 'contained',
      color = 'inherit',
      type = 'button',
      className,
      disabled,
      ...other
    } = inProps;

    return (
      <StyledButton
        ref={ref}
        className={className}
        disabled={disabled}
        variant={variant}
        color={color}
        type={type}
        {...other}
      >
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';

export default Button;
