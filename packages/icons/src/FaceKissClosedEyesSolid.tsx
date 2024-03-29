import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm287.9 44.3c-13.2-7.4-30.5-12.3-47.9-12.3-3.6 0-6.8 2.5-7.7 5.1-1 4.4.6 8.1 3.8 9l.2 1 .5.3.4.3c.8.4 2 1.2 3.4 2.1 2.8 1.8 6.6 4.5 10.2 7.6 3.8 3.1 7.2 5.7 9.7 10 1.6 2.7 3.5 6.4 3.5 8.6 0 2.2-1.9 5-3.5 8.6-2.5 3.4-5.9 6.9-9.7 10-3.6 3.1-7.4 5.8-10.2 7.6-1.4.9-2.6 1.7-3.4 2.1l-.6.4-.3.2-.2.1c-2.5 1.4-4.1 4.1-4.1 7 0 2.9 1.6 5.6 4.1 6.1l.2 1c.2.1.5.3.9.6.8.4 2 1.2 3.4 2.1 2.8 1.8 6.6 4.5 10.2 7.6 3.8 3.1 7.2 6.5 9.7 10 1.6 2.7 3.5 6.4 3.5 7.7 0 3.1-1.9 5.9-3.5 9.5-2.5 3.4-5.9 6.9-9.7 10-3.6 3.1-7.4 5.8-10.2 7.6-1.4.9-2.6 1.7-3.4 2.1-.4.3-.7.5-.9.6l-.2-.8v.9c-3.2 1.8-4.8 5.5-3.8 9 .9 3.5 4.1 5.1 7.7 5.1 17.4 0 34.7-4 47.9-11.4 6.6-3.7 12.5-8.2 16.8-13.4 4.2-5.1 7.3-11.4 7.3-19.2 0-6-3.1-12.3-7.3-17.4-4.3-5.2-10.2-10.6-16.8-13.4-2.7-1.6-5.6-3-8.7-5.2 3.1-.4 6-1.8 8.7-3.4 6.6-3.7 12.5-8.2 16.8-13.4 4.2-5.1 7.3-11.4 7.3-19.2 0-6-3.1-12.3-7.3-17.4-4.3-5.2-10.2-10.6-16.8-13.4zm-54.3-63.5c7.1-5.3 8.5-15.3 3.2-22.4-30.4-40.5-91.2-40.5-121.6 0-5.3 7.1-3.9 17.1 3.2 22.4 7.1 5.3 17.1 3.9 22.4-3.2 17.6-23.5 52.8-23.5 70.4 0 5.3 7.1 15.3 8.5 22.4 3.2zm67.2-3.2c17.6-23.5 52.8-23.5 70.4 0 5.3 7.1 15.3 8.5 22.4 3.2 7.1-5.3 8.5-15.3 3.2-22.4-30.4-40.5-91.2-40.5-121.6 0-5.3 7.1-3.9 17.1 3.2 22.4 7.1 5.3 17.1 3.9 22.4-3.2z" />
  </svg>
);

const SvgFaceKissClosedEyesSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceKissClosedEyesSolid;
