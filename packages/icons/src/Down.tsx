import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M112 64v176H32c-17.69 0-32 14.36-32 31.1 0 9.2 3.252 17.4 9.375 23.5l160 176C175.6 476.9 183.8 480 192 480s16.38-3.125 22.62-9.375l160-176C380.7 288.5 384 280.3 384 271.1c0-16.7-14.3-31.1-32-31.1h-80V64c0-17.67-14.33-32-32-32h-96c-17.7 0-32 14.33-32 32zm128 0v208l110.9 1.1L192 447.9 32 272h112V64h96z" />
  </svg>
);

const SvgDown = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDown;
