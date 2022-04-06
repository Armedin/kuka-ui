import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M224 480C100.5 480 0 379.5 0 256S100.5 32 224 32s224 100.5 224 224-100.5 224-224 224zm0-416C118.1 64 32 150.1 32 256s86.13 192 192 192 192-86.13 192-192S329.9 64 224 64z" />
  </svg>
);

const SvgO = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgO;
