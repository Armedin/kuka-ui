import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m313.6 119.7-104-112C204.8 2.556 198.4 0 191.1 0s-11.9 2.556-16.7 7.671l-104 112C63.92 126.7 62.19 136.8 66 145.6s12.45 14.41 22 14.41l87.1-.01v272c0 26.47-21.53 48-47.1 48H16c-8.844 0-16 7.156-16 16s7.155 16 15.1 16h111.1c44.11 0 80-35.88 80-80V160h88c9.547 0 18.19-5.656 22-14.41s3.9-18.89-2.6-25.89zM106.3 128l85.66-92.25L277.7 128H106.3z" />
  </svg>
);

const SvgTurnUp = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTurnUp;
