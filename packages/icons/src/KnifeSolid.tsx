import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M508.7 127.1c-7 36.2-25.6 69.6-50.8 95.7L353.6 327.1c-5.9 5.9-13 10.6-20.8 13-7.7 4.1-16.1 5.7-24.5 5.7-8.4 0-16.7-1.6-24.5-5.7-7.7-2.4-14.8-7.1-20.7-13l-10.8-10.8-184.01 184A40 40 0 0 1 40 512c-10.61 0-20.78-4.2-28.29-11.7A40.058 40.058 0 0 1-.004 472c0-10.6 4.215-20.8 11.714-28.3l183.99-184-.5-.5L445 9.377c3.7-3.697 8.3-6.43 13.3-7.963 5-1.533 10.3-1.817 15.4-.83 5.1.989 9.9 3.22 14 6.499 4.1 3.277 6.4 7.507 9.4 12.307 14.5 33.94 18.5 71.45 11.6 107.71z" />
  </svg>
);

const SvgKnifeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgKnifeSolid;
