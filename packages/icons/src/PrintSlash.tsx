import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M480 70.63V192H342.2l40.53 32H512c17.64 0 32 14.36 32 32v95.29l30.16 23.81c1.04-2.2 1.84-4.5 1.84-7.1V256c0-35.3-28.7-64-64-64V70.63c0-8.43-3.4-16.68-9.4-22.63L464 9.375C458 3.422 449.8 0 441.4 0H160v32h281.4L480 70.63zM472 272c0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.26-10.75-24-24-24s-24 10.7-24 24zm161.9 211.4L25.92 3.42c-6.938-5.453-17-4.25-22.48 2.641-5.469 6.938-4.281 17 2.641 22.48l608 480C617 510.9 620.5 512 623.1 512c4.734 0 9.422-2.094 12.58-6.078C642 498.1 640.8 488.9 633.9 483.4zM176.2 224 128 185.1v6.9c-35.3 0-64 28.7-64 64v112c0 8.8 7.16 16 16 16s16-7.2 16-16V256c0-17.64 14.36-32 32-32h48.2zM480 480H160V352h178.3l-40.5-32H160c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h320c14.88 0 26.83-10.37 30.41-24.13L480 463.9V480z" />
  </svg>
);

const SvgPrintSlash = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPrintSlash;
