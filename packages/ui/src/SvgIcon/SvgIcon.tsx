import styled from '@emotion/styled';
import React from 'react';
import { styledSx, SxProps } from '@kukui/system';

export interface SvgIconProps {
  component?: React.ElementType;
  children?: React.ReactChild;
  className?: string;
  onClick?: () => void;
  sx?: SxProps;
  viewBox?: string;
  fontSize?: 'inherit' | 'lg' | 'md' | 'sm';
}

const SvgIconRoot = styled('svg')(
  {
    width: '1em',
    height: '1em',
    display: 'inline-block',
    flexShrink: 0,
    fill: 'currentColor',
    userSelect: 'none',
  },
  props => ({
    ...(props.fontSize && {
      fontSize: {
        sm: '20px',
        md: '24px',
        lg: '35px',
      }[props.fontSize],
    }),
    ...styledSx(props),
  })
);

const SvgIcon = React.forwardRef<any, SvgIconProps>((inProps, ref) => {
  const { component = 'svg', fontSize = 'md', ...other } = inProps;

  return (
    <SvgIconRoot
      className="KukuiSvgIcon"
      as={component}
      focusable="false"
      aria-hidden={true}
      role="img"
      fontSize={fontSize}
      ref={ref}
      {...other}
    />
  );
});

SvgIcon.displayName = 'SvgIcon';

export default SvgIcon;
