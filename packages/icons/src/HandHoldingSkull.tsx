import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M558.2 333.6c-9.5-8.619-22-13.37-35.12-13.37-12.5 0-24.88 4.248-34.62 12.12l-61.45 49.21a10.863 10.863 0 0 1-6.795 2.385h-41.62c4.625-9.619 6.5-20.74 4.75-32.23C379.4 323.7 353.7 304 325.6 304H181.2c-20.75 0-40.1 6.746-57.5 19.24l-38.5 28.73H16c-8.801 0-16 7.195-16 15.99s7.198 15.14 15.1 15.14l80.01.011 46.86-35.29c11.12-8.244 24.62-12.74 38.37-12.74h146.7c13.25 0 24 10.74 24 23.99s-10.75 23.98-24 23.98H239.1c-8.75 0-16 7.246-16 15.99 0 8.746 7.25 15.99 16 15.99h180.2c9.625 0 19-3.248 26.62-9.246l61.62-49.22c4.25-3.373 9.5-5.248 14.62-5.248 5 0 9.875 1.75 13.75 5.248 10.12 9.12 9.375 24.48-.875 32.61l-100.7 80.58a42.794 42.794 0 0 1-26.72 9.37H16c-8.801 0-16 7.188-16 15.98S7.198 512 15.1 512h392.5c17 0 33.38-5.871 46.62-16.37l100.9-80.7c12.25-9.744 19.5-24.36 19.1-39.98 2.28-15.65-5.12-30.75-16.02-41.35zM327.1 159.1c13.25 0 23.1-10.75 23.1-23.1 0-13.25-10.75-24-23.1-24S304 122.75 304 136c-.9 13.2 10.7 23.1 23.1 23.1zM199 227.9l-6.4 30.2c-3.2 15.3 6.5 29 19.8 29h151.2c13.25 0 22.1-14.62 19.75-29.87l-6.375-30.25c33.25-23.37 55.02-59.24 55.02-99.86C432 57.25 367.5 0 288 0S143.1 57.25 143.1 127.1c0 41.5 22.7 77.4 55.9 100.8zm89-196.8c61.74 0 111.1 42.1 111.1 95.99 0 28.37-15.12 55.25-41.49 73.75l-17.25 12.12 9 42.12H225.8l9-42.12-17.3-11.26c-26.37-18.5-41.49-45.37-41.49-73.75C176 74.1 226.3 31.1 288 31.1zm-40 128c13.25 0 23.1-10.75 23.1-23.1 0-13.25-10.75-24-23.1-24s-23.1 10.75-23.1 24c-.9 13.2 9.9 23.1 23.1 23.1z" />
  </svg>
);

const SvgHandHoldingSkull = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHandHoldingSkull;
