import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M320 336c4.094 0 8.188-1.562 11.31-4.688 6.25-6.25 6.25-16.38 0-22.62L54.63 32H176c8.8 0 16-7.16 16-16s-7.2-16-16-16H16C7.156 0 0 7.156 0 16v160c0 8.8 7.156 16 16 16s16-7.2 16-16V54.63l276.7 276.7c3.1 3.07 7.2 4.67 11.3 4.67zM288 64c-23.5 0-46.69 3.625-68.91 10.81-8.39 2.69-12.99 11.72-10.29 20.13s11.7 13.06 20.1 10.36c18.2-6.17 38.9-9.3 59.1-9.3 105.9 0 192 86.13 192 192s-86.13 192-192 192S96 393.87 96 288c0-20.16 3.125-40.03 9.25-59.09 1.85-8.41-1.95-17.41-10.31-20.11-8.31-2.7-17.41 1.9-20.13 10.3C67.63 241.3 64 264.5 64 288c0 123.5 100.5 224 224 224s224-100.5 224-224S411.5 64 288 64z" />
  </svg>
);

const SvgArrowUpLeftFromCircle = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowUpLeftFromCircle;
