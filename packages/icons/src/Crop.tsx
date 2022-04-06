import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M416 384h80c8.8 0 16 7.2 16 16s-7.2 16-16 16h-80v80c0 8.8-7.2 16-16 16s-16-7.2-16-16V150.6L150.6 384H352v32H144c-26.5 0-48-21.5-48-48V128H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h80V16c0-8.836 7.2-16 16-16s16 7.164 16 16v345.4L361.4 128H160V96h233.4l91.3-91.314c6.2-6.248 16.4-6.248 22.6 0 6.3 6.244 6.3 16.384 0 22.624L416 118.6V384z" />
  </svg>
);

const SvgCrop = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCrop;
