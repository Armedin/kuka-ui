import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M494.6 255.9C428.97 255.08 376 201.76 376 136c-65.74 0-119.1-52.97-119.8-118.6-25.66-3.867-51.8.235-74.77 12.07L116.7 62.41a124.902 124.902 0 0 0-54.29 54.29L29.6 181.2a124.287 124.287 0 0 0-12.07 75.94l11.37 71.48c4.102 25.9 16.29 49.8 34.81 68.32l51.36 51.39C133.6 466.9 157.3 479 183.2 483.1l71.84 11.37c25.9 4.101 52.27-.117 75.59-11.95l64.81-33.05a123.355 123.355 0 0 0 54.14-54.14l32.93-64.57c11.79-23.06 15.99-49.36 12.09-74.86zM176 367.1c-17.62 0-32-14.37-32-31.1s14.38-31.1 32-31.1 32 14.37 32 31.1-14.4 31.1-32 31.1zM208 208c-17.62 0-32-14.37-32-31.1s14.38-31.1 32-31.1 32 14.37 32 31.1-14.4 31.1-32 31.1zm160 127.1c-17.62 0-32-14.37-32-31.1s14.38-31.1 32-31.1 32 14.37 32 31.1-14.4 31.1-32 31.1z" />
  </svg>
);

const SvgCookieBiteSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCookieBiteSolid;