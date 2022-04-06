import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M437.2 403.5 319.1 215V80c0-8.84-6.3-16-16-16S288 71.16 288 79.1l-.9 135.9a32 32 0 0 0 4.826 16.9L347.6 320H100.4l54.79-88.1c3.11-5.1 4.81-11.8 4.81-16.9V79.1c0-7.94-7.2-15.1-16-15.1s-16 7.16-16 15.1V215L10.8 403.5C-18.48 450.6 15.27 512 70.89 512h306.2c55.61 0 89.41-61.5 60.11-108.5zM410.9 460c-3.3 6-13.3 20-33.8 20H70.89c-20.51 0-30.48-13.95-33.82-19.95-7.025-12.63-6.691-27.46.873-39.65L80.48 352h287l42.55 68.41c7.57 12.19 7.07 26.99.87 39.59zM112 32h224c8.8 0 16-7.16 16-16s-7.2-16-16-16H112c-8.8 0-16 7.156-16 16s7.2 16 16 16z" />
  </svg>
);

const SvgFlask = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFlask;
