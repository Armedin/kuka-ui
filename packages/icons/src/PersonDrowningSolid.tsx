import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M191.1 96.16c0 52.64 35 99.24 85.2 115.24 40 12.8 81.8 13.7 122.8 5.2l105.8-23.8c17.2-3.9 34.4 6.9 38.3 24.1 3.9 17.2-6.9 34.4-24.1 38.3l-105 23.9c-10.5 2.4-21.2 4.2-31.9 5.4l-17.7 97.6c-13.6-3.2-27.3-9.4-39.7-18-22-15.5-51.5-15.5-73.6 0-17.2 11.8-38 20.4-59.2 20.4-7.3 0-15-1.2-22.8-3.3l21-146.7c-38.7-34.4-63.1-84.3-63.1-138.34V64c0-17.67 15.2-32 32-32 18.6 0 32 14.33 32 32v32.16zm64 30.94c0-34.45 29.6-64 64.9-64 35.3 0 64 29.55 64 64 0 36.2-28.7 64-64 64s-64.9-27.8-64.9-64zM384 416c26.9 0 55.4-10.8 77.4-26.1h.1c11.9-8.5 28-7.8 39.2 1.7 14.3 11.9 32.5 21 50.6 25.2 17.2 4 27.9 21.3 23.9 38.5s-22.1 27.9-38.5 23.9c-24.5-5.8-44.8-16.6-58.2-25-29 15.5-61.5 25.8-94.5 25.8-31.9 0-60.6-9.9-80.4-18.9-5.9-2.6-11.1-5.3-15.6-7.7-4.5 2.4-9.7 5.1-15.6 7.7-19.8 9-48.5 18.9-80.4 18.9-33.9 0-65.5-10.3-94.5-25.8-13.38 8.4-33.71 19.2-58.23 25-17.21 4-34.417-6.7-38.428-23.9-4.011-17.2 6.69-34.5 23.898-38.5 18.1-4.2 36.22-13.3 50.57-25.2 11.15-9.5 27.29-10.2 39.19-1.7h.1c22.1 15.3 50.5 26.1 77.4 26.1 27.5 0 55-10.6 77.5-26.1 11.1-7.9 25.9-7.9 37 0 21.6 15.5 50 26.1 77.5 26.1z" />
  </svg>
);

const SvgPersonDrowningSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPersonDrowningSolid;
