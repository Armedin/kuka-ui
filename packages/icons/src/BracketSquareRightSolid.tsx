import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" {...props}>
    <path d="M32 63.1C32 81.67 46.33 96 63.1 96H128v320H63.1C46.33 416 32 430.3 32 447.1S46.33 480 63.1 480H160c17.6 0 32-14.4 32-32V64c0-17.6-14.4-32-32-32H63.1C46.33 32 32 46.33 32 63.1z" />
  </svg>
);

const SvgBracketSquareRightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBracketSquareRightSolid;
