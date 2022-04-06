import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m137.4 438.6-128-128c-12.5-12.5-12.5-32.75 0-45.25l128-127.1c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 256H432c8.8 0 16-7.2 16-16V64c0-17.67 14.31-32 32-32s32 14.33 32 32v176c0 44.11-35.88 80-80 80H109.3l73.38 73.37c6.22 6.23 9.32 14.43 9.32 21.73s-3.125 16.38-9.375 22.62C170.1 451.1 149.9 451.1 137.4 438.6z" />
  </svg>
);

const SvgArrowTurnDownLeftSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowTurnDownLeftSolid;
