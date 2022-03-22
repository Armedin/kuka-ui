import styled from '@emotion/styled';
import React from 'react';
import { styledSx, extendSxProp } from '@kukui/system';

export interface SvgIconProps {
  component?: React.ElementType;
  children?: React.ReactChild;
  className?: string;
  sx?: object;
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
    ...styledSx(props),
    fontSize: {
      sm: '20px',
      md: '24px',
      lg: '35px',
    }[props.fontSize],
  })
);

const SvgIcon = React.forwardRef<HTMLElement, SvgIconProps>((inProps, ref) => {
  const props = extendSxProp({ ...inProps });
  const { component, viewBox, ...other } = props;

  return (
    <SvgIconRoot
      as={component}
      focusable="false"
      viewBox={viewBox}
      aria-hidden={true}
      role="img"
      ref={ref}
      {...other}
    />
  );
});

SvgIcon.defaultProps = {
  component: 'svg',
  viewBox: '0 0 320 512',
  fontSize: 'md',
  sx: {},
};

SvgIcon.displayName = 'SvgIcon';

export default SvgIcon;
