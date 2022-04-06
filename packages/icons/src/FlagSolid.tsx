import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M64 496c0 8.8-7.25 16-16 16H16c-8.75 0-16-7.2-16-16V32C0 14.25 14.25 0 32 0s32 14.25 32 32v464zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233-45.69 20.86-79.56 27.94-107.8 27.94-59.96 0-94.81-31.86-163.9-31.87C160.9.306 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1 73.63 0 124.9 31.78 198.6 31.78 31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z" />
  </svg>
);

const SvgFlagSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFlagSolid;
