import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M320 32c61.76 0 112 50.24 112 112 0 34.85-16.33 65.64-41.37 86.2l25.62 20.22c29.12-26.35 47.75-64.06 47.75-106.4C464 64.49 399.53.92 320.9.92c-54.45 0-101.3 30.58-125.7 75.16l25.4 20.05C237.9 57.95 275.8 32 320 32zM96 480c0-70.58 57.42-128 128-128h114.3l-40.5-32h-73.78c-88.36 0-160 71.63-160 159.1C63.1 497.7 78.33 512 95.1 512h444.1l-40.53-32H96zm537.9 3.4-608-480C18.962-2.053 8.9-.85 3.42 6.041c-5.469 6.938-4.281 17 2.641 22.48l608 480C617 510.9 620.5 512 623.1 512c4.734 0 9.422-2.094 12.58-6.078C642 498.1 640.8 488.9 633.9 483.4z" />
  </svg>
);

const SvgUserLargeSlash = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUserLargeSlash;
