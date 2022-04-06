import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M432 216c-13.12 0-24 10.88-24 24s10.88 24 24 24 24-10.88 24-24-10.9-24-24-24zm112-24.9h-13.53c-11.17-24.4-28.77-46-51.37-62.5V63.97l-16-.87c-46.63 0-83.13 27.25-89.38 32H223.1c-41.38 0-82.63 17.38-111.8 45.88-22.37 21.88-38.5 50.25-45.13 82.13l-10.19.89c-14.88 0-26.5-13.51-23.5-28.76 1.615-8.744 8.51-16.4 19.13-18.61 7.26-1.508 12.36-8.088 12.36-15.5 0-10.14-9.436-17.89-19.33-15.63-22.71 5.2-41.12 23.4-44.167 47.1C-3.902 226.7 22.6 256 55.98 256h7.994c0 52.25 25.38 98.13 64 127.3v48.75c0 26.4 21.6 48 48 48h48.01c26.4 0 47.1-21.6 47.1-48v-16h64v16c0 26.4 21.6 48 48 48h48.01c26.4 0 48-21.6 48-48l.001-48.73c11.63-9 22.45-19.52 31.32-31.27h32.68C561.6 352 576 337.6 576 319.1v-96c0-16.7-14.4-32-32-32zm-.9 128.9h-48.75c-17 22.38-17 24.12-47.25 47.25V432c0 8.837-7.163 16-16 16h-48c-8.837 0-16-7.163-16-16v-48h-128v48c0 8.837-7.163 16-16 16h-48c-8.837 0-16-7.163-16-16v-64.75C95.1 318.3 95.99 273.8 95.99 256c0-70.63 57.37-128 127.1-128h161.8c16.88-13.5 33.13-26.5 62.25-30.75v47.25c40.56 30.1 43.96 39.3 62.46 79.5h34.38v96z" />
  </svg>
);

const SvgPig = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPig;
