import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M406.1 480h-.594c-6.922-.281-12.89-4.938-14.8-11.59L288 106.2 184.4 468.4c-1.9 6.7-7.9 11.3-14.8 11.6-7.672-.531-13.22-3.969-15.61-10.47L.986 53.5C-2.061 45.19 2.189 36 10.49 32.94c8.281-2.938 17.48 1.219 20.53 9.501l136.1 370L272.6 43.57c3.937-13.75 26.84-13.75 30.78 0l105.5 368.9 136.1-370c3.062-8.282 12.3-12.44 20.53-9.501 8.297 3.063 12.55 12.25 9.5 20.56l-152.1 416C419.7 475.8 413.7 480 406.1 480z" />
  </svg>
);

const SvgW = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgW;
