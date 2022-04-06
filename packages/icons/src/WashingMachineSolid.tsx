import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M260.8 284.3c-9.5 10-22.9 15.7-36.8 15.7s-27.3-5.6-36.8-15.6c-20.04 20.5-52.76 20.88-73.3 1-1.2 6.1-1.8 12.4-1.9 18.6 0 61.88 50.15 112 112 112s112-50.13 112-112a119.37 119.37 0 0 0-1.867-18.75C313.6 305.3 280.9 304.9 260.8 284.3zM384 0H63.98C28.63 0 0 28.63 0 64v416c0 17.62 14.31 32 31.98 32h384c17.67 0 31.98-14.38 31.98-32V64C448 28.63 419.4 0 384 0zM184 64c13.3 0 24 10.75 24 24s-10.74 24-23.96 24C170.7 112 160 101.3 160 88s10.7-24 24-24zM64 88c0-13.25 10.82-24 24-24 13.31 0 24 10.75 24 24s-10.69 24-24 24c-13.18 0-24-10.7-24-24zm160 360c-79.52 0-143.1-64.5-143.1-144S144.5 160 224 160s143.1 64.5 143.1 144S303.5 448 224 448z" />
  </svg>
);

const SvgWashingMachineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWashingMachineSolid;
