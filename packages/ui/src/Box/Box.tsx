import styled from '@emotion/styled';
import { styledSx } from '@kukui/system';
import React from 'react';

export interface BoxProps {
  component?: React.ElementType;
  className?: string;
  sx?: object;
  children?: React.ReactNode;
}

const BoxRoot = styled('div')(styledSx);

const Box = React.forwardRef<HTMLElement, BoxProps>((inProps, ref) => {
  const { component, ...other } = inProps;

  return <BoxRoot as={component} {...other} ref={ref} />;
});

Box.displayName = 'Box';

Box.defaultProps = {
  component: 'div',
  sx: {},
};

export default Box;
