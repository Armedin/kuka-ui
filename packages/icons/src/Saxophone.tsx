import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M15.1 127.1h255.1c10.6 0 17.8-6.3 17.8-15.1s-7.2-16-16-16H16c-8.844 0-16 7.2-16 16s7.156 15.1 15.1 15.1zm128 104.9c0-13.25-10.75-24-24-24s-24 10.75-24 24 11.6 24 24 24 24-10.7 24-24zm-64 80c0 13.25 10.75 24 24 24s24-10.75 24-24-9.9-24-24-24-24 10.8-24 24zm556.1-211.2-43.25-59.38C585.1 35.38 577.9 32 569.4 32h-46.88c-17 0-33.25 6.75-45.25 18.75L255.1 256c-9.125 9-23.5 9.875-33.5 2-9.2-7.9-11.9-22-5.4-33l24.86-40.65C247.6 173.7 239.1 160 227.5 160c-5.6 0-10.8 2.9-13.7 7.6l-25.1 40.9c-10.6 17.8-10.8 39.8-1.6 57.8 10.25 18 29.38 29.12 50 29.25 15.38 0 29.75-6 39.75-16l222.1-206.1C505.9 67.38 513.1 64 522.5 64h46.38l23.38 32h-70.88s-100.3 117.1-134.5 157.6C233.1 434.3 220.1 448 159.1 448c-83.5 0-128-74.38-128-128 0-28.12 11.78-93.03 23.44-140.2C57.93 169.7 50.3 160 39.9 160c-7.35 0-13.79 4.9-15.56 12.1C14.84 210.28 0 284.4 0 320c0 70.25 57.37 159.1 159.1 159.1 94.5 0 103.7-35.75 375.1-351.1h88c16 0 23.2-17.2 13-27.2z" />
  </svg>
);

const SvgSaxophone = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSaxophone;
