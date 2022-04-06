import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M511.1 192c0-45.59-20.63-80-48-80-27.38 0-48 34.41-48 80s20.63 80 48 80c28.3 0 48-34.4 48-80zm-64 0c0-27.36 6.874-48 16-48 9.125 0 16 20.64 16 48s-6.875 48-16 48c-8.2 0-16-20.6-16-48zm-336 0c-8 0-15.11 7.1-15.11 16s7.11 16 15.11 16 16-7.125 16-16-6.2-16-16-16zm128 32c8.875 0 16.01-7.123 16.01-15.1S248.9 192 239.1 192c-8.877 0-16 7.123-16 15.1s8 16.9 16 16.9zm-64 0c8.875 0 16-7.127 16-16s-6.2-16-16-16-16 7.1-16 15.1 8 16.9 16 16.9zm128 0c8.875 0 16-7.125 16-16s-7.125-16-16-16-16 7.127-16 16 8 16 16 16zm160-224h-320C82.1 0 31.98 86 31.98 192v172.1c0 41.13-9.75 62.75-31.13 126.9-3.5 10.3 4.249 21 15.13 21h312.9c13.88 0 26-8.75 30.38-21.88C370.5 456.6 383.1 416 383.1 384l.002-191.9C383.1 105.3 420.6 32 463.1 32c43.38 0 80 73.28 80 160s-36.63 160-80 160c-8.846 0-16 7.156-16 16s7.159 16 16 16c63.7 0 112.9-84.3 112.9-192S526.8 0 463.1 0zm-112 192-.004 172.1c0 48.8-9.967 75.32-23 115.9H38.23c26.53-68.98 25.75-102.8 25.75-115.9V192c0-94.25 42.13-160 80-160h257.3c-29.88 34.12-50.18 92.5-50.18 160z" />
  </svg>
);

const SvgToiletPaper = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgToiletPaper;
