import styled from '@emotion/styled';
import { styledSx, SxProps } from '@kukui/system';

import React, { HTMLAttributes } from 'react';

export interface BoxProps extends HTMLAttributes<any> {
  component?: React.ElementType;
  className?: string;
  sx?: SxProps;
  children?: React.ReactNode;
}

const BoxRoot = styled('div')(styledSx);

const Box = React.forwardRef<HTMLElement, BoxProps>((inProps, ref) => {
  const { component = 'div', ...other } = inProps;

  return <BoxRoot as={component} {...other} ref={ref} />;
});

Box.displayName = 'Box';

export default Box;
