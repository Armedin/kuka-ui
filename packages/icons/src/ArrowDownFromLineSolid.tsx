import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M297.4 297.4 224 370.8V192c0-17.69-14.31-32-32-32s-32 14.3-32 32v178.8l-73.37-73.4C80.38 291.1 72.19 288 64 288s-16.37 3.1-22.62 9.4c-12.5 12.5-12.5 32.75 0 45.25l128 128c12.5 12.5 32.75 12.5 45.25 0l128-128c12.5-12.5 12.5-32.75 0-45.25s-32.73-12.5-45.23 0zM32 96h320c17.69 0 32-14.31 32-32s-14.31-32-32-32H32C14.31 32 0 46.31 0 64s14.31 32 32 32z" />
  </svg>
);

const SvgArrowDownFromLineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowDownFromLineSolid;
