import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M93.13 257.7c-21.88 17.4-40.13 55.8-54.5 97.4l60.37-22c5.75-2.125 10.62 4.749 6.625 9.499L11 454.7c-7.25 31.4-11 55.5-11 55.5s206.6 13.62 266.6-34.12c60-47.87 76.63-150.1 76.63-150.1L256.5 216.7s-103.4-7.6-163.37 41zM633.2 12.34c-10.84-13.91-30.91-16.45-44.91-5.624l-225.7 175.6-34.99-44.06c-5.1-6.356-15.1-5.156-18.6 2.244l-25.2 53.6 86.75 109.2 58.75-12.5c8-1.625 11.38-11.12 6.375-17.5l-33.19-41.79 225.2-175.2C641.6 46.38 644.1 26.27 633.2 12.34z" />
  </svg>
);

const SvgBroomSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBroomSolid;
