import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M303.1 203.7c-42.63-43-76.38-26.12-90.25-14.5-27.5 23-28.88 64.13-4.25 89l84.75 85.63c5.375 5.5 14.25 5.625 19.75 0l84.75-85.63c24.5-24.88 23-66-4.5-89-13.15-11.6-46.85-28.5-90.25 14.5zm72.6 52-71.75 72.63-71.75-72.63c-10.25-10.25-12.38-30 2-42 13.75-11.5 31.25-3.375 38.5 3.75l31.38 31.75 31.38-31.75c7.125-7.25 24.62-15.25 38.38-3.75 14.26 12 12.26 31.6 1.86 42zM486.1 41.36c-.906-1.812-2.484-3.938-4.016-5.312-3.609-3.219-8.469-4.656-13.27-3.812C464 33.05 459.8 35.96 457.5 40.17c-25.67 45.65-71.61 71.84-126 71.84h-68.56C170.9 112 96 187.9 96 281.2c0 5.641.473 11.26 1.045 16.86-47.74 41.48-82.79 97.71-96.68 162.6-1.859 8.625 3.641 17.12 12.28 19 1.135.24 2.265.34 3.375.34 7.375 0 14.02-5.125 15.62-12.66 11.09-51.72 37.77-96.75 73.59-132.3 2.916 8.539 6.262 16.94 10.54 24.9 0 0 0-.031 0 0C145 414.2 201.4 448 262.9 448c5.984 0 11.97-.313 17.08-.906C414.4 437.3 512 319.4 512 166.6c0-42.8-9.3-88.21-25.9-125.24zm-210 373.84c-4.609.531-9.344.781-14.11.781-49.7 0-95.27-27.28-118.9-71.21C130.8 320.2 128 296.7 128 281.2c0-74.37 61.77-137.2 134.9-137.2h68.56c54.2 0 103-22.69 135.8-61.9 8.24 26.6 12.74 56.2 12.74 84.5 0 135.6-85.1 240.1-203.9 248.6z" />
  </svg>
);

const SvgLeafHeart = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgLeafHeart;
