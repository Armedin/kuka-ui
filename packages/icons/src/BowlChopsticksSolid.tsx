import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M14.71 127.1c1.84 0-26.02 4.596 477.2-80.24C504.1 45.63 512 35.29 512 24.08 512 9.67 500.07.07 488.02.07c-3.727 0 27.4-6.23-476.3 98.77C4.854 100.3 0 106.4 0 113.2c0 8.9 7.361 13.9 14.71 13.9zm464.39 96H32c-17.62 0-32 14.39-32 32.19 0 95.69 51.5 179 127.1 223.8 0 17.67 14.33 32 32 32h191.1c17.67 0 32-14.33 32-32 76.5-44.81 127.1-128.1 127.1-223.8 1.8-16.89-11.7-32.19-30.2-32.19zm8.5-94.3L15.74 143.5C6.969 143.8 0 150.1 0 159.8c0 8.9 7.275 16.2 16.25 16.2h472.1c13.05 0 23.65-10.6 23.65-23.6 0-13.4-11.9-24.1-24.4-23.6z" />
  </svg>
);

const SvgBowlChopsticksSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBowlChopsticksSolid;
