import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224zm79.9-352h-160c-8.844 0-16 7.156-16 16s7.156 16 16 16h132.4L194 360.1c-4.375 7.688-1.688 17.44 5.969 21.84C202.6 383.3 205.3 384 208 384a16.07 16.07 0 0 0 13.91-8.062l127.9-224a16.092 16.092 0 0 0-.063-15.97C346.9 131 341.6 128 335.9 128z" />
  </svg>
);

const SvgCircle7 = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircle7;
