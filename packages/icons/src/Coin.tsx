import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M428.1 242.3c-10 9.9-24.9 18.1-41.9 24.7-34.1 13.2-80.1 21-131.1 21-49.2 0-95.2-7.8-129.3-21-17-6.6-31.88-14.8-42.76-24.7-10.89-10-19.94-22.9-19.94-38.3 0-15.4 9.05-28.3 19.94-38.3 10.88-9.9 25.76-18.1 42.76-25.6 34.1-12.3 80.1-20.1 129.3-20.1 51 0 97 7.8 131.1 20.1 17 7.5 31.9 15.7 41.9 25.6 11.7 10 19.9 22.9 19.9 38.3 0 15.4-8.2 28.3-19.9 38.3zm-290.8-71.5c-14.8 5.8-25.7 12.2-32.7 18.5-6.9 6.4-8.6 11.3-8.6 14.7 0 3.4 1.7 8.3 8.6 14.7 7 5.4 17.9 12.7 32.7 18.5C166.9 248.6 208.9 256 256 256c47.1 0 89.1-7.4 118.7-18.8 14.8-5.8 25.7-13.1 32.7-18.5 6.9-6.4 8.6-11.3 8.6-14.7 0-3.4-1.7-8.3-8.6-14.7-7-6.3-17.9-12.7-32.7-18.5C345.1 159.4 303.1 152 256 152c-47.1 0-89.1 7.4-118.7 18.8zM0 208C0 128.5 114.6 64 256 64s256 64.5 256 144v112c0 70.7-114.6 128-256 128S0 390.7 0 320V208zm421.3 73.9C463 258.5 480 231.1 480 208c0-23.1-17-50.5-58.7-73.9-40.7-22.9-99.1-39-165.3-39-66.2 0-124.6 16.1-165.33 39C48.96 157.5 32 184.9 32 207.1c0 24 16.96 51.4 58.67 74.8 40.73 22.9 99.13 37.2 165.33 37.2 66.2 0 124.6-14.3 165.3-37.2zM176 409.2c20 3.5 41.5 4.9 64 6.5v-64c-22.2-1.6-43.7-3.1-64-6.9v64.4zm-32-71.7c-17.2-4.7-33.2-10.4-48-17.1v64.7c14.2 6.6 30.3 12.3 48 17v-64.6zM32 320c0 12.9 8.51 29.9 32 46.8v-63.6c-12.22-7.7-22.97-16.3-32-25.4V320zm240 31.7v64c22.5-1.6 43.1-3 64-6.5v-64.4c-20.3 3.8-41.8 5.3-64 6.9zm208-73.9c-9.9 9.1-19.8 17.7-32 25.4v63.6c23.5-16.9 32-33.9 32-46.8v-42.2zM368 402.1c17.7-4.7 33.8-10.4 48-17v-64.7c-14.7 6.7-30.8 12.4-48 17.1v64.6z" />
  </svg>
);

const SvgCoin = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCoin;
