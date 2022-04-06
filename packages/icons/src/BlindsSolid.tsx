import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M96 226.1V160H16L0 256h67.02c4.75-13.6 15.36-24.3 28.98-29.9zm61 61.9c-6.6 19.1-24.8 32-45 32s-38.38-12.9-45-32H16L0 384h512l-16-96H157zM16 416 0 512h512l-16-96H16zM512 48l-.003-32c0-8.875-7.125-16-16-16H16C7.125 0 .9 7.125.9 16L0 48c0 6.75 4.375 12.88 10.88 15L0 128h96V64h32v64h384l-10.88-65C507.6 60.88 512 54.75 512 48zM128 160v66.98c13.6 4.72 24.2 15.42 29 29.02h355l-16-96H128z" />
  </svg>
);

const SvgBlindsSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBlindsSolid;
