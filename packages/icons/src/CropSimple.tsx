import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M128 368c0 8.8 7.2 16 16 16h208v32H144c-26.5 0-48-21.5-48-48V128H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h80V16c0-8.836 7.2-16 16-16s16 7.164 16 16v352zm256-224c0-8.8-7.2-16-16-16H160V96h208c26.5 0 48 21.5 48 48v240h80c8.8 0 16 7.2 16 16s-7.2 16-16 16h-80v80c0 8.8-7.2 16-16 16s-16-7.2-16-16V144z" />
  </svg>
);

const SvgCropSimple = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCropSimple;
