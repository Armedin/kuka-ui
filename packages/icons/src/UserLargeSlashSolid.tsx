import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M284.9 320H224c-88.36 0-160 71.63-160 159.1-.9 18.6 14.33 32.9 31.1 32.9l448-.004c.014 0-.014 0 0 0l-14.13-.001L284.9 320zm345.9 149.1L381.3 273.6c48.74-22.1 82.65-72.1 82.65-129.6C463.95 64.47 399.48.9 320.85.9c-69.64 0-127.3 49.57-140.6 115.3L38.81 5.109A23.96 23.96 0 0 0 24.03 0C16.91 0 9.845 3.156 5.127 9.187c-8.187 10.44-6.375 25.53 4.062 33.7L601.2 506.9c10.5 8.203 25.56 6.328 33.69-4.078 8.21-10.422 6.31-25.522-4.09-33.722z" />
  </svg>
);

const SvgUserLargeSlashSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUserLargeSlashSolid;
