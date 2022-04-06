import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M384 256c0-8.188-3.125-16.38-9.375-22.62l-128-128C237.5 96.22 223.7 93.47 211.8 98.44 199.8 103.4 192 115.1 192 128v64H48c-26.51 0-48 21.5-48 48v32c0 26.5 21.49 48 48 48h144v64c0 12.94 7.797 24.62 19.75 29.56 11.97 4.969 25.72 2.219 34.88-6.938l128-128C380.9 272.4 384 264.2 384 256zM224 384v-96H48c-8.82 0-16-7.2-16-16v-32c0-8.8 7.18-16 16-16h176l-.9-96 128 128L224 384zM432 32h-96c-8.8 0-16 7.16-16 16s7.2 16 16 16h96c26.5 0 48 21.53 48 48v288c0 26.47-21.53 48-48 48h-96c-8.844 0-16 7.156-16 16s7.156 16 16 16h96c44.13 0 80-35.88 80-80V112c0-44.12-35.9-80-80-80z" />
  </svg>
);

const SvgRightToBracket = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRightToBracket;
