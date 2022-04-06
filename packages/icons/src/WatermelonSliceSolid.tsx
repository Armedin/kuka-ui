import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M425.3 7.031c-9.375-9.375-24.56-9.375-33.94 0L374.4 23.99l16.96 16.96c46.81 46.81 72.59 109 72.59 175.2s-25.78 128.4-72.59 175.2C344.6 438.2 282.4 464 216.2 464c-66.19 0-128.4-25.78-175.2-72.59L24.01 374.4 7.04 391.38C2.537 395.9 0 402 0 408.4s2.537 12.47 7.037 16.97C62.91 481.2 137.2 512 216.2 512c79.03 0 153.3-30.77 209.2-86.64C481.2 369.5 512 295.2 512 216.2S481.2 62.89 425.3 7.031zM216.2 432c57.63 0 111.8-22.45 152.6-63.22 40.77-40.76 63.22-94.95 63.22-152.6 0-57.64-22.45-111.8-63.22-152.6l-16.96-16.96-305.2 305.2 16.96 16.96c40.8 40.72 95 63.22 152.6 63.22zm139.1-156.7c-6.246 6.246-16.35 6.272-22.6.018l-16.02-16.02c-6.25-6.252-6.25-16.38 0-22.63 6.25-6.252 16.38-6.252 22.62 0l16.03 16.02c6.27 5.412 6.27 16.412-.03 22.612zm-46.6-126.6c6.25-6.25 16.38-6.25 22.62 0l16.03 16.01c6.25 6.252 6.225 16.37-.025 22.62-6.244 6.248-16.35 6.269-22.6.013l-16.02-16.01C302.4 165.1 302.4 154.1 308.7 148.7zm-33.4 206.6c-6.246 6.246-16.35 6.278-22.61.024l-16.02-16.03c-6.25-6.25-6.25-16.38 0-22.63 6.25-6.252 16.38-6.252 22.62 0l16.02 16.02c6.29 5.416 6.29 16.416-.01 22.616zm-46.6-126.6c6.25-6.252 16.38-6.252 22.62 0l16.02 16.02c6.25 6.25 6.231 16.36-.02 22.61-6.22 6.27-17.22 6.27-22.62.07l-16-16.1c-6.3-6.2-6.3-17.2 0-22.6zm-80 80c6.25-6.25 16.38-6.25 22.62 0l15.98 16c6.25 6.25 6.236 16.36-.014 22.61-6.246 6.246-16.36 6.277-22.61.023l-16.01-16.03C142.4 325.1 142.4 314.1 148.7 308.7z" />
  </svg>
);

const SvgWatermelonSliceSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWatermelonSliceSolid;
