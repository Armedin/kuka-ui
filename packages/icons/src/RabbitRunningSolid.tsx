import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M167.4 412.7c-4.625 2.1-7.502 8.097-7.502 13.6v37.75c0 12.5 13.87 20.28 24.5 13.53l66.68-39.87-47.81-47.8L167.4 412.7zm416.9-195.4-56.48-34.66c-.125-13.1-2.153-30.72-7.028-48.59-11.25-42.24-31.89-73.45-46.01-69.7-14 3.875-16.25 41.1-5.001 83.34.75 2.375 1.45 4.78 2.201 7.03-5.001-5.999-10.23-12.16-16.35-18.28C424.7 105.5 391.2 88.78 380.1 99.02c-10.38 10.37 6.422 43.7 37.3 74.7 12.75 12.62 25.72 22.76 37.47 29.76-3.125 5.749-5.754 12.03-6.879 19.28-.5 3.125-.75 6.217-.75 9.342-51.63-36.1-154.6-104.1-224.2-104.1-52.13 0-85.21 28.27-104.7 54.14-1.75-2.75-2.875-5.749-5.251-8.124-18.75-18.75-49.26-18.75-67.88 0-18.75 18.75-18.75 49.24 0 67.99 16.38 16.37 41.25 17.5 59.88 5.249l191.4 191.4a32.013 32.013 0 0 0 22.64 9.37l143.1-.002c8.876 0 15.1-7.124 15.1-15.1V416c0-17.62-14.26-31.1-32.01-31.1H351.9v-55.6c0-35.5-23.89-67.14-58.02-76.89L251.5 239.4c-8.5-2.4-13.4-11.3-11-19.8 2.375-8.499 11.39-13.37 19.77-10.1l42.39 12.12c47.88 13.62 81.26 57.91 81.26 107.7v23.6l64.03-32 103.4.002C582.6 320 608 294.6 608 263.4c0-19.3-8.9-35.5-23.7-46.1zM527.1 256c-8.876 0-16-7.126-16-15.1 0-8.874 7.126-15.1 16-15.1s16.01 7.125 16.01 15.1c-.01 8-6.21 15.1-16.01 15.1z" />
  </svg>
);

const SvgRabbitRunningSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRabbitRunningSolid;
