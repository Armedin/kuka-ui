import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 480C86.1 480 0 393.87 0 288V48c0-8.84 7.156-16 16-16s16 7.16 16 16v240c0 88.22 71.78 160 160 160s160-71.78 160-160V48c0-8.84 7.2-16 16-16s16 7.16 16 16v240c0 105.9-86.1 192-192 192z" />
  </svg>
);

const SvgU = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgU;
