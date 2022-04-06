import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M408 120c0 54.6-73.1 151.9-105.2 191.1-7.7 10.5-21.9 10.5-29.6 0C241.1 271.9 168 174.6 168 120 168 53.73 221.7 0 288 0s120 53.73 120 120zM288 32c-48.6 0-88 39.4-88 88 0 7.4 2.7 19 9.4 34.1 6.5 16.3 15.7 33.3 26.4 50.6 17.1 27.8 36.9 54.7 52.2 74.4 15.3-19.7 35.1-46.6 52.2-74.4 10.7-17.3 19.9-34.3 26.4-50.6 6.7-15.1 9.4-26.7 9.4-34.1 0-48.6-39.4-88-88-88zm137.2 148.7 117.9-47.2c15.8-6.3 32.9 5.3 32.9 22.3v270.8c0 9.8-6 18.6-15.1 22.3l-155 62c-3.3 1.3-6.9 1.5-10.3.5l-218.7-62.5-143.99 57.6C17.15 512.8 0 501.2 0 484.2V213.4c0-9.8 5.975-18.6 15.09-22.3l123.21-49.2c2.1 10.4 5.3 20.8 9.2 30.7L32 218.8v253.6l128-51.2V304c0-8.8 7.2-16 16-16s16 7.2 16 16v115.9l192 54.9V303.1c0-7.9 7.2-16 16-16s16 8.1 16 16v169.3l128-51.2V167.6l-138.1 55.3c-.8.3-1.6.5-2.5.7 8.2-14.1 15.7-28.7 21.8-42.9z" />
  </svg>
);

const SvgMapLocation = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMapLocation;
