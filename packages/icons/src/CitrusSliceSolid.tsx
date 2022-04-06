import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M428.2 176c-7.936-42.33-28.29-81.3-59.41-112.4l-16.96-16.96L243.8 154.7c4.6 6.3 7.9 13.5 9.9 21.3h174.5zm-181.3 48.3 132.6 132.6c33.83-39.15 52.46-88.46 52.46-140.7 0-2.752-.298-5.451-.4-8.188H253.7c-1.5 5.788-3.8 11.288-6.8 16.288zM425.3 7.031c-9.375-9.375-24.56-9.375-33.94 0L374.4 23.99l16.96 16.96c46.81 46.81 72.59 109 72.59 175.2s-25.78 128.4-72.59 175.2C344.6 438.2 282.4 464 216.2 464c-66.19 0-128.4-25.78-175.2-72.59L24.01 374.4 7.04 391.38C2.537 395.9 0 402 0 408.4s2.537 12.47 7.037 16.97C62.91 481.2 137.2 512 216.2 512c79.03 0 153.3-30.77 209.2-86.64C481.2 369.5 512 295.2 512 216.2S481.2 62.89 425.3 7.031zM356.9 379.5 244.7 267.4c-.023-.023.023.023 0 0l-16-16.1c-.021-.021.021.021 0 0l-4.4-4.4c-5 3-10.5 5.3-16.3 6.8v177.9c2.7.1 5.4.4 8.2.4 52.2 0 101.6-18.6 140.7-52.5zM176 428.2V253.7c-7.8-2-15-5.3-21.3-9.9l-108 108 16.96 16.96C94.71 399.9 133.7 420.3 176 428.2z" />
  </svg>
);

const SvgCitrusSliceSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCitrusSliceSolid;
