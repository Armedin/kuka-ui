import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 192v-3.6C0 172.7 12.74 160 28.44 160H224c17.7 0 32-14.3 32-32V96c0-53.02 42.1-96 96-96 47.5 0 86.9 34.45 94.6 79.72l57.6 34.58c4.8 2.9 7.8 8.1 7.8 13.7s-3 10.8-7.8 13.7L448 175.5V192c0 93.9-57.7 174.3-139.7 207.6l40.9 77.2c6.2 11.7 1.7 26.2-10 32.4-11.7 6.2-27.1 1.7-32.4-10l-45.7-86.3c-12.1 1.2-24.5 3.1-37.1 3.1-1 0-2-.9-3-.9l32.2 61.7c6.2 11.7 1.7 26.2-10 32.4-11.7 6.2-27.1 1.7-32.4-10l-48.7-91.8C68.52 380.5 0 294.3 0 192zm352-96c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z" />
  </svg>
);

const SvgBirdSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBirdSolid;
