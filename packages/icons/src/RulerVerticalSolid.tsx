import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="M0 48C0 21.49 21.49 0 48 0h160c26.5 0 48 21.49 48 48v48h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v64h-80c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v48c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48V48z" />
  </svg>
);

const SvgRulerVerticalSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRulerVerticalSolid;
