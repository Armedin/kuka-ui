import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M336 112V16c0-8.838-7.2-16-16-16s-16 7.162-16 16v32c0 61.9-50.1 112-112 112S80 109.9 80 48V16c0-8.838-7.16-16-16-16S48 7.162 48 16v96c0 51.9-16.84 102.5-48 144v208c0 26.5 21.49 48 48 48h288c26.51 0 48-21.49 48-48V256c-31.2-41.5-48-92.1-48-144zM32 266.3c26.3-38.26 42.51-83.15 46.83-129.3 26.37 33.5 67.27 55 113.17 55s86.78-21.54 113.2-55.05c1.59 16.99 5.311 33.64 10.03 50.02L32 389.2V266.3zM352 464c0 8.822-7.178 16-16 16H48c-8.82 0-16-7.2-16-16v-35.42l294.3-210.2c7.1 16.72 15.4 32.92 25.7 47.92V464z" />
  </svg>
);

const SvgShirtRunning = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShirtRunning;
