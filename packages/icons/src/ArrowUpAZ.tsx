import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M478.3 200.4 399.2 40.1c-5.438-10.84-23.19-10.84-28.62 0l-79.1 160.3c-3.953 7.922-.75 17.53 7.156 21.51 7.906 4.004 17.52.719 21.47-7.172l11.58-23.19h108.2l11.58 23.19c3.096 6.168 12.08 11.91 21.47 7.172 6.164-4.01 9.364-13.61 5.364-21.51zm-132.4-40.9 38.11-76.34 38.11 76.34H345.9zm101.2 288.4h-94.7l107.2-134.2c3.844-4.82 4.578-11.39 1.922-16.96-2.672-5.543-8.262-8.867-14.42-8.867H319.1c-8.844 0-16 6.957-16 15.82s7.156 16.02 16 16.02h94.7l-107.2 134.2c-3.844 4.82-4.578 11.39-1.922 16.96C308.2 476.5 313.8 480 319.1 480h127.1c8.844 0 15.1-7.168 15.1-16.03 1.8-8.87-4.5-16.07-14.2-16.07zM139.3 36.69c-6.25-6.25-16.38-6.25-22.62 0l-96 96c-6.25 6.25-6.25 16.38 0 22.62s16.38 6.25 22.62 0L112 86.63V464c0 8.844 7.156 16 16 16s16-7.2 16-16V86.63l68.69 68.69C215.8 158.4 219.9 160 224 160s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62L139.3 36.69z" />
  </svg>
);

const SvgArrowUpAZ = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowUpAZ;
