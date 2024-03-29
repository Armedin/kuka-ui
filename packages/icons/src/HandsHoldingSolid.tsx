import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M216.1 236c-11-13.7-30.3-16.9-44.1-5-13.81 11.06-16.05 31.19-5 45l18.86 30.56c8.94 11.14 8.04 27.14-2.06 37.24-11.79 11.79-31.2 10.71-41.61-2.305L80 256.8V104c0-22.09-17.91-40-40-40S0 81.91 0 104v204.7c0 14.54 4.949 28.65 14.03 40L134.13 500c6.97 7.6 16.17 12 24.97 12H256c17.67 0 32.03-14.35 32.03-32.02L288 358.4c0-21.79-7.414-42.93-21.02-59.94L216.1 236zM600 64c-22.09 0-40 17.91-40 40v152.8l-62.2 84.73c-10.41 13.02-29.83 14.09-41.61 2.305-10.08-10.07-10.97-26.11-2.068-37.24l18.86-30.56c11.05-13.81 8.812-33.94-5-45-13.77-11.03-33.94-8.75-44.97 5l-49.99 62.5C359.4 315.5 352 336.6 352 358.4l-.031 121.5C351.1 497.7 366.3 512 384 512h96.02c9.713 0 18.9-4.414 24.96-12l120.1-151.3c10.02-11.3 14.92-25.4 14.92-40V104c0-22.09-17.9-40-40-40z" />
  </svg>
);

const SvgHandsHoldingSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHandsHoldingSolid;
