import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M558.2 333.6c-9.5-8.619-22-13.37-35.12-13.37-12.5 0-24.88 4.248-34.62 12.12l-61.45 49.21a10.863 10.863 0 0 1-6.795 2.385h-41.62c4.625-9.619 6.5-20.74 4.75-32.23C379.4 323.7 353.7 304 325.6 304H181.2c-20.75 0-40.1 6.746-57.5 19.24l-38.5 28.73H16c-8.801 0-16 7.195-16 15.99s7.198 15.14 15.1 15.14l80.01.011 46.86-35.29c11.12-8.244 24.62-12.74 38.37-12.74h146.7c13.25 0 24 10.74 24 23.99s-10.75 23.98-24 23.98H239.1c-8.75 0-16 7.246-16 15.99 0 8.746 7.25 15.99 16 15.99h180.2c9.625 0 19-3.248 26.62-9.246l61.62-49.22c4.25-3.373 9.5-5.248 14.62-5.248 5 0 9.875 1.75 13.75 5.248 10.12 9.12 9.375 24.48-.875 32.61l-100.7 80.58a42.794 42.794 0 0 1-26.72 9.37H16c-8.801 0-15.1 7.188-15.1 15.98S7.198 512 15.1 512h392.5c17 0 33.38-5.871 46.62-16.37l100.9-80.7c12.25-9.744 19.5-24.36 19.1-39.98 2.28-15.65-5.12-30.75-16.02-41.35zM223.1 192h15.1c54.7 0 97.8-43.1 97.8-96 0-8.844-7.156-16-16-16s-16 7.16-16 16c0 35.28-28.72 64-64 64h-16c-35.3 0-64-28.7-64-64s28.72-64 64-64h106.7c47 0 85.3 38.28 85.3 85.3 0 26.69-12.75 52.22-34.13 68.25l-55.47 41.59c-7.062 5.312-8.5 15.34-3.219 22.41C326.3 253.8 331.2 256 336 256a15.93 15.93 0 0 0 9.594-3.188l55.5-41.63C430.5 189.1 448 154 448 117.3 448 52.63 395.4 0 330.7 0H223.1C170.16 0 128 43.06 128 96s43.1 96 95.1 96z" />
  </svg>
);

const SvgHandHoldingMagic = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHandHoldingMagic;
