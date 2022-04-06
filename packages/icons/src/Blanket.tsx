import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M392 368H96c-8.844 0-16 7.156-16 16s7.156 16 16 16h296c30.88 0 56-25.12 56-56V112c0-44.11-35.9-80-80-80H80C35.88 32 0 67.89 0 112v272c0 52.94 43.06 96 96 96h336c8.844 0 16-7.156 16-16s-7.2-16-16-16H96c-35.28 0-64-28.7-64-64s28.72-64 64-64h296c13.22 0 24 10.77 24 24s-10.8 24-24 24zm0-80H96c-24.68 0-46.98 9.6-64 24.1V112c0-26.47 21.53-48 48-48h288c26.5 0 48 21.53 48 48v181.6c-7.3-3.5-15.4-5.6-24-5.6z" />
  </svg>
);

const SvgBlanket = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBlanket;
