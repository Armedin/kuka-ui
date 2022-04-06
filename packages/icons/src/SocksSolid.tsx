import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M319.1 32c0-11 3.125-21.25 8-30.38-1.7-.748-4.2-1.62-8-1.62H192c-17.6 0-32.9 14.38-32.9 32l.004 32h160l-.004-32zm-72.5 278.1 73.36-55 .003-159.1h-160l-.005 175.1-86.64 64.61c-39.38 29.5-53.86 84.4-29.24 127 18.25 31.62 51.1 48.36 83.97 48.36 20 0 40.26-6.225 57.51-19.22l21.87-16.38C177.6 421 193.9 350.6 246.6 310.1zm104.5-39-86.13 64.61c-39.37 29.5-53.86 84.4-29.23 127C254.9 495.3 287.2 512 320.1 512c20 0 40.25-6.25 57.5-19.25l115.2-86.38C525 382.3 544 344.2 544 303.1V96H352l-.9 175.1zM512 0H384c-17.62 0-32 14.38-32 32v32h192V32c0-17.62-14.4-32-32-32z" />
  </svg>
);

const SvgSocksSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSocksSolid;
