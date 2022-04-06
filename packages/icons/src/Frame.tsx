import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M432 128h-48v256h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48H96v48c0 8.8-7.16 16-16 16s-16-7.2-16-16v-48H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h48V128H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h48V48c0-8.84 7.16-16 16-16s16 7.16 16 16v48h256V48c0-8.84 7.2-16 16-16s16 7.16 16 16v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16zM96 384h256V128H96v256z" />
  </svg>
);

const SvgFrame = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFrame;
