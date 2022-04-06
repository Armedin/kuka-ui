import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m416 352-288 .013V336c0-8.9-7.1-16-16-16H80c-8.88 0-16 7.1-16 16v16.01L32 352c-17.62 0-32 14.38-32 32v96c0 17.62 14.38 32 32 32h384c17.62 0 32-14.38 32-32v-96c0-17.6-14.4-32-32-32zM192 218.8V320h64V218.8c46.13-13.75 80.01-56.16 80.01-106.8 0-61.88-50.13-111.1-112-111.1S111.1 50.12 111.1 111.1c0 51.5 34.8 93.9 80.9 107.7zM200 48c13.2 0 24 10.75 24 24s-10.8 24-24 24-24-10.75-24-24 10.8-24 24-24z" />
  </svg>
);

const SvgJoystickSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgJoystickSolid;
