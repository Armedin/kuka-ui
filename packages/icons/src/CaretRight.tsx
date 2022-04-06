import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="M64 128v255.1c0 28.37 34.5 42.74 54.63 22.62l128-127.1c12.5-12.5 12.5-32.75 0-45.25l-128-127.1C98.5 85.27 64 99.52 64 128zm160 128L96 383.1V128l128 128z" />
  </svg>
);

const SvgCaretRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCaretRight;
