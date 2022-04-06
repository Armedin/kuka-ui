import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M192 64c0-35.35 28.7-64 64-64s64 28.65 64 64-28.7 64-64 64-64-28.65-64-64zm64 32c17.7 0 32-14.33 32-32s-14.3-32-32-32-32 14.33-32 32 14.3 32 32 32zm-96 128c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v56c0 16.1-11.9 29.4-27.3 31.7l-8.9 84.5c-2.2 20.3-19.3 35.8-40.7 35.8H236c-20.5 0-37.6-15.5-39.8-35.8l-8.9-84.5c-15.4-2.3-27.3-15.6-27.3-31.7v-56zm56.6 59.6 11.5 109.2c.4 4.1 3.8 7.2 7.9 7.2h39.1c5 0 8.4-3.1 8.8-7.2l11.5-109.2 23.7-3.6.9-56.9c0-16.8-14.3-32-32-32h-64c-17.7 0-32 15.2-32 32v56l24.6 4.5zM52.97 406.8c-8.43 4.5-14.03 8.8-17.34 12.5-3.23 3.6-3.63 5.9-3.63 6.9 0 1.7 1.25 6.7 11.93 14 10.16 7 25.92 13.9 46.83 20C132.4 472.3 190.8 480 256 480s123.6-7.7 165.2-19.8c21-6.1 36.7-13 46.9-20 10.6-7.3 11.9-12.3 11.9-14 0-1-.4-3.3-3.6-6.9-3.3-3.7-8.9-8-17.4-12.5-16.8-8.9-42-17-73.6-23.1-8.7-1.7-14.4-10.1-12.7-19.6 1.7-7.8 10.1-13.5 18.7-11.8 33.2 6.4 61.9 15.2 82.6 26.2 10.4 5.5 19.5 11.9 26.2 18.6 6.9 8.5 11.8 18 11.8 29.1 0 17.6-12.2 31-25.8 40.4-14.1 9.7-33.5 17.8-56 24.3C384.9 504.1 323.3 512 256 512c-67.3 0-128.9-7.9-174.17-21.1-22.52-6.5-41.91-14.6-56.03-24.3C12.18 457.2 0 443.8 0 426.2c0-11.1 4.947-20.6 11.76-29.1 6.73-6.7 15.87-13.1 26.23-18.6 20.75-11 49.37-19.8 82.61-26.2 8.6-1.7 17 4 18.7 11.8.8 9.5-4 17.9-12.7 19.6-31.62 6.1-56.8 14.2-73.63 23.1z" />
  </svg>
);

const SvgStreetView = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgStreetView;