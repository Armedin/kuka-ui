import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 24.08C512 9.67 500.07.07 488.02.07c-3.096 0 17.55-4.234-264 54.51v38.31l267.9-45.18C504.1 45.62 512 35.29 512 24.08zM479.1 223.1 192 224V40c0-13.26-10.7-24-24-24s-24 10.74-24 24v184h-32V56c0-13.26-10.7-24-24-24-13.26 0-24 10.74-24 24v31.95L11.75 98.84C4.854 100.3 0 106.4 0 113.2c0 8.9 7.361 13.9 14.71 13.9.912 0-5.301 1.1 49.29-8.09V142l-48.26 1.5C6.969 143.8 0 150.1 0 159.8c0 8.9 7.275 16.2 16.25 16.2H64v48l-32-.9c-17.62 0-32 14.39-32 32.19 0 95.69 51.5 179 127.1 223.8 0 17.67 14.33 32 32 32h191.1c17.67 0 32-14.33 32-32 76.5-44.81 127.1-128.1 127.1-223.8 1.8-16.89-11.7-32.19-30.2-32.19zm8.5-94.3L224 137v39h264.4c13 0 23.6-10.6 23.6-23.6 0-13.4-11.9-24.1-24.4-23.6z" />
  </svg>
);

const SvgBowlChopsticksNoodlesSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBowlChopsticksNoodlesSolid;
