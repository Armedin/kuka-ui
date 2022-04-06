import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 256c0 141.4 114.6 256 256 256s256-114.6 256-256S397.4 0 256 0 0 114.6 0 256zm137.5 47.6 54.24-23.25c6.391-2.766 13.9-.906 18.24 4.484l22.02 26.91c34.63-17 62.77-45.14 79.77-79.75L284.8 209.1a15.643 15.643 0 0 1-4.492-18.22l23.27-54.28c3.047-6.953 10.59-10.77 17.93-9.062l50.38 11.62c7.125 1.625 12.11 7.891 12.11 15.22 0 126.1-102.6 228.8-228.7 228.8-7.336 0-13.6-4.984-15.24-12.11l-11.62-50.39C126.7 314.2 130.5 306.6 137.5 303.6z" />
  </svg>
);

const SvgCirclePhoneFlipSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCirclePhoneFlipSolid;
