import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M288 256c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm21.9 34.4 61.9 20.2c-18.3 38.8-55.6 66.9-100.7 72.4l.8-65.9c15.9-3.2 29.4-13.2 38-26.7zM320 256c0-15.4-5.5-29.6-14.5-40.6l38.2-52.7c24.8 23.4 40.3 56.5 40.3 93.3 0 8.3-.8 16.3-2.3 24.2L319.9 260c-.8-1.3.1-2.6.1-4zm-40.4-59.5c-7.3-2.9-15.3-4.5-23.6-4.5s-16.3 1.6-23.6 4.5l-38.2-52.6c18.3-10.1 39.4-15.9 60.9-15.9 23.3 0 44.4 5.8 62.7 15.9l-38.2 52.6zm-73.1 18.9c-9 11-14.5 25.2-14.5 40.6 0 1.4 0 2.7.1 4l-61.8 20.2c-1.5-7.9-2.3-15.9-2.3-25.1 0-35.9 15.5-69 40.3-92.4l38.2 52.7zm33.4 101.7-.8 65.9c-43.4-5.5-80.6-33.6-98.9-72.4l61.9-20.2c8.5 13.5 22 23.5 37.8 26.7zM0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm256 160c88.4 0 160-71.6 160-160S344.4 96 256 96 96 167.6 96 256s71.6 160 160 160z" />
  </svg>
);

const SvgTireSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTireSolid;