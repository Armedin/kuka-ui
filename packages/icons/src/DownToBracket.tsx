import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m201.4 374.6-128.02-128c-9.16-9.1-11.91-22.9-6.94-34.8A31.96 31.96 0 0 1 96 192h64V48c0-26.51 21.5-48 48-48h32c26.5 0 48 21.49 48 48v144h64c12.9 0 24.6 7.8 29.6 19.8 4.9 11.9 2.2 25.7-7 34.8l-128 128c-6.2 6.3-14.4 9.4-22.6 9.4-8.2 0-16.4-3.1-22.6-9.4zm22.6-23.5 128-128-96 .9V48c0-8.82-7.2-16-16-16h-32c-8.8 0-16 7.18-16 16v176H96l128 127.1zM368 512H80c-44.13 0-80-35.9-80-80v-96c0-8.8 7.156-16 16-16 8.84 0 16 7.2 16 16v96c0 26.5 21.53 48 48 48h288c26.5 0 48-21.5 48-48v-96c0-8.8 7.2-16 16-16s16 7.2 16 16v96c0 44.1-35.9 80-80 80z" />
  </svg>
);

const SvgDownToBracket = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDownToBracket;
