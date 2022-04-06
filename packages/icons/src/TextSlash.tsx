import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m347.9 64-25.86 112 27.78 21.94 30.92-133.1h163.3v47.1c0 8.799 7.199 15.1 16 15.1s16-7.201 16-15.1V48c0-8.838-7.164-15.1-16-15.1H143.1c-1.248 0-2.352.441-3.518.71l39.63 31.29H347.9zm4.1 384h-59.9l25.86-112.1-27.78-21.94-30.92 133.1H191.1c-8.801 0-16 7.199-16 15.1 0 8.799 7.2 16.01 16 16.01h160c8.801 0 16-7.208 16-16.01.9-6.96-6.3-14.16-15.1-14.16zm281.9 35.4L25.92 3.42c-6.938-5.453-17-4.25-22.48 2.641C-2.032 12.1-.845 23.06 6.077 28.55l608 480C617 510.9 620.5 512 623.1 512c4.734 0 9.422-2.094 12.58-6.078C642 498.1 640.8 488.9 633.9 483.4z" />
  </svg>
);

const SvgTextSlash = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTextSlash;
