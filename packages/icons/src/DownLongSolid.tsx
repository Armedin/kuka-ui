import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="m281.6 392.3-104 112.1c-9.498 10.24-25.69 10.24-35.19 0l-104-112.1a24.042 24.042 0 0 1-4.404-25.94c3.811-8.758 12.45-14.42 21.1-14.42H128V32c0-17.69 14.33-32 32-32s32 14.31 32 32v319.9h72a23.99 23.99 0 0 1 22 14.42c3.8 8.78 2.1 18.98-4.4 25.98z" />
  </svg>
);

const SvgDownLongSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDownLongSolid;
