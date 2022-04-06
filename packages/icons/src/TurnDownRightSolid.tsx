import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M366.4 414c-8.7-3.8-14.4-12.5-14.4-22v-72.9H80c-44.13 0-80-35-80-80V64c0-17.67 14.31-32 32-32 17.69 0 32 14.33 32 32v175.1c0 9.7 7.19 16 16 16h272V184c0-9.5 5.7-18.2 14.4-22 8.8-3.8 18.9-2.1 25.9 4.4l112 104c10.3 9.5 10.3 25.7 0 35.2l-112 104c-7 6.5-17.1 8.2-25.9 4.4z" />
  </svg>
);

const SvgTurnDownRightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTurnDownRightSolid;
