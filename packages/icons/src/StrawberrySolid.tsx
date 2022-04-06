import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M299.4 117.4c-26.2-26.73-63.9-54.3-109.7-54.3C108.6 63.1 0 155 0 328.7 0 469.4 33.9 512 183.3 512 357.5 512 448 402.7 448 322.3c0-45.81-26.67-83.47-53.4-109.7l-95.2-95.2zM234.5 200c4.6 0 13.5 2.8 13.5 13.5 0 16-18.7 34.5-34.5 34.5-10.7 0-13.5-8.9-13.5-13.5 0-16 18.7-34.5 34.5-34.5zm-64-64c4.6 0 13.5 2.8 13.5 13.5 0 16-18.7 34.5-34.5 34.5-10.7 0-13.5-8.9-13.5-13.5 0-16 18.7-34.5 34.5-34.5zm-32 96c4.6 0 13.5 2.8 13.5 13.5 0 16-18.7 34.5-34.5 34.5-10.7 0-13.5-8.9-13.5-13.5 0-16 18.7-34.5 34.5-34.5zM85.46 376C74.8 376 72 367.1 72 362.5c0-16 18.65-34.5 34.5-34.5 4.6 0 13.5 2.8 13.5 13.5 0 16-18.7 34.5-34.54 34.5zm64.04 64c-10.7 0-13.5-8.9-13.5-13.5 0-16 18.7-34.5 34.5-34.5 4.6 0 13.5 2.8 13.5 13.5 0 16-18.7 34.5-34.5 34.5zm32-96c-10.7 0-13.5-8.9-13.5-13.5 0-16 18.7-34.5 34.5-34.5 4.6 0 13.5 2.8 13.5 13.5 0 16-18.7 34.5-34.5 34.5zm64 64c-10.7 0-13.5-8.9-13.5-13.5 0-16 18.7-34.5 34.5-34.5 4.6 0 13.5 2.8 13.5 13.5 0 16-18.7 34.5-34.5 34.5zm32-96c-10.7 0-13.5-8.9-13.5-13.5 0-16 18.7-34.5 34.5-34.5 4.6 0 13.5 2.8 13.5 13.5 0 16-18.7 34.5-34.5 34.5zm64 64c-10.7 0-13.5-8.9-13.5-13.5 0-16 18.7-34.5 34.5-34.5 4.6 0 13.5 2.8 13.5 13.5 0 16-18.7 34.5-34.5 34.5zm105.9-267.1c26.14-27.63 48.64-64.69 48.64-84.88 0-13.35-10.89-24.05-24.11-24.05-32.46 0-16.75 44.21-66.63 82.54C403.6 43.24 373.6 0 360.3 0 347.8 0 320 38.39 320 78.36c0 9.306.823 10.95 1.404 15.79.277.281.568.514.846.797l94.97 94.98c.234.23.43.473.662.703C422.6 191.2 424 192 433.5 192c37.6 0 78.5-27.1 78.5-40.4 0-11.8-34.9-36.2-64.6-42.7z" />
  </svg>
);

const SvgStrawberrySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgStrawberrySolid;
