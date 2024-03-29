import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 79.1V183c0 35.75-23.74 67.12-57.99 76.87l-10.51 3-19.51 33.85c-4.375 7.623-14.24 10.27-21.87 5.774l-32.25-18.63L285.1 308.1c-13.12 3.75-24.1 10.76-34.62 20.38l-175.6 175.6c-9.375 9.375-24.5 9.375-33.87 0l-33.1-33.1c-9.375-9.373-9.375-24.5 0-33.87l88.99-88.99V303.1c0-8.875 7.126-16 15.1-16h44.12l26.5-26.49c21.12-21.13 47.33-36.48 76.08-44.73L416 170.87V95.1h-50.37l-11.5 23.12c-4 7.875-13.62 11.13-21.5 7.125L275.4 97.62c-7.873-3.875-11.12-13.5-7.123-21.37l16.01-32.02C297.787 17.11 325.517 0 355.767 0h76.25C476.1 0 512 35.88 512 79.1z" />
  </svg>
);

const SvgStaffSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgStaffSolid;
