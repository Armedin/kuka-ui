import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M351.9 0c8.9 0 17.3 3.625 23.4 10.13 6 6.37 9.1 14.99 8.6 22.97L351.1 482c-.3 16.9-14.3 30-32 30H64.03c-16.87 0-30.86-13.1-31.99-30L.052 34c-.5-8.87 2.623-17.5 8.621-23.87C14.8 3.626 23.19 0 32.07 0H351.9zM64.03 479.8l255.07.2 22.6-305-21.8 10.1c-30.4 16.1-66.9 12.2-93.4-9a55.056 55.056 0 0 0-69 0c-26.5 21.2-62.97 25.1-93.38 9L42.26 175l21.77 304.8zm14.41-322.5c19.24 9.6 42.36 7.2 59.16-6.2 31.8-25.5 77-25.5 108.8 0 16.8 13.4 39.9 15 59.2 6.2l38.8-19.4L351.1 32H32.04l7.57 105.9 38.83 19.4z" />
  </svg>
);

const SvgGlassWater = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGlassWater;
