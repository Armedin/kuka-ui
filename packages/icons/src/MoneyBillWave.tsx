import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M384 255.1C384 315 343.6 368 288 368s-96-53-96-112.9c0-59 40.4-112 96-112s96 53 96 112zM288 336c32.7 0 64-33 64-80.9 0-47-31.3-80-64-80s-64 33-64 80c0 47.9 31.3 80.9 64 80.9zM0 422.3V112.5c0-23.91 25.61-39.67 48.66-33.37C128.4 100.9 208.2 80.59 288 60.25c87-22.17 174-44.35 261-11.87 16.9 6.31 27 23.24 27 41.28V399.5c0 23.9-25.6 39.7-48.7 33.4-79.7-21.8-159.5-1.5-239.3 18.8-87.9 22.2-174.9 44.4-261.03 11.9C10.06 457.3 0 440.4 0 422.3zm96-303.2v.4c-18.5-1.4-37.12-4.4-55.77-10.4-2.17.3-4.88.7-6.89 2.1-.89.6-1.26 1.1-2.24 1.2l.9.1V184c35.35 0 64-28.7 64-64v-.9zM32 376v46.3c0 6.9 3.66 10.4 6.16 11.3 19.14 7.2 38.37 10.5 57.84 13.2V440c0-35.3-28.65-64-64-64zm0-32c53.02 0 96 42.1 96 96v7.9c44.7-1.8 91.1-11.7 141.3-24.4 4.3-1.1 8.6-2.2 13-3.3 51.8-13.3 107.9-27.6 165.7-28.6.2-52.8 43.1-96.5 96-96.5v-128c-53.9 0-96-42.1-96-96v-7.05c-44.7.96-91.1 11.73-141.3 24.46-4.3 1.09-8.6 2.2-13 3.31-51.8 13.28-107.9 27.58-166.6 28.58.7 52.8-42.22 94.7-95.1 94.7V344zm510.7 56.8c.9-.6 1.2-1.1 1.3-1.2V328c-35.3 0-64 28.7-64 64v.5c18.5 1.4 37.1 4.4 55.8 9.5 2.1.6 4.8.2 6.9-1.2zm1.3-265.7V89.66c0-6.84-3.7-10.37-6.2-11.3-19.1-7.15-38.3-11.32-57.8-13.19v5.93c0 36.2 28.7 64 64 64z" />
  </svg>
);

const SvgMoneyBillWave = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMoneyBillWave;
