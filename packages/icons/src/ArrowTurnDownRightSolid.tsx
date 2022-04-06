import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M329.4 438.6c-6.3-6.2-9.4-14.4-9.4-22.6 0-8.2 3.1-16.4 9.4-22.6l73.3-73.4H80c-44.13 0-80-35.9-80-80V64c0-17.67 14.31-32 32-32 17.69 0 32 14.33 32 32v176c0 8.8 7.19 16 16 16h322.7l-73.3-73.4c-12.5-12.5-12.5-32.7 0-45.2s32.7-12.5 45.2 0l128 128c12.5 12.5 12.5 32.7 0 45.2l-128 128c-12.5 12.5-32.7 12.5-45.2 0z" />
  </svg>
);

const SvgArrowTurnDownRightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowTurnDownRightSolid;
