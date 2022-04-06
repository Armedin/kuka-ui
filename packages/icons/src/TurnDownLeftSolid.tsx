import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m119.7 409.6-112-104c-10.23-9.5-10.23-25.69 0-35.19l112-104c6.984-6.484 17.17-8.219 25.92-4.406s14.41 12.45 14.41 22L160 256h272c8.8 0 16-7.2 16-16V64c0-17.67 14.31-32 32-32s32 14.33 32 32v176c0 44.11-35.88 80-80 80H160v72c0 9.547-5.656 18.19-14.41 22s-18.89 2.1-25.89-4.4z" />
  </svg>
);

const SvgTurnDownLeftSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTurnDownLeftSolid;
