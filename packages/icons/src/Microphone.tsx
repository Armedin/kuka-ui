import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M336 192c-8.8 0-16 7.2-16 16v48c0 73.5-62.25 132.6-136.8 127.8C115.3 379.1 64 319.6 64 251.5V208c0-8.8-7.2-16-16-16s-16 7.2-16 16v42.38c0 83.38 61.63 156.1 144 164.4V480h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.801 0 16-7.201 16-16 0-8.801-7.199-16-16-16h-64v-65c80.8-8.1 144-76.2 144-159v-48c0-8.8-7.2-16-16-16zM192 352c53 0 96-43 96-96V96c0-52.1-43-96-96-96S96 43 96 96v160c0 53 43 96 96 96zM128 96c0-35.25 28.75-64 64-64s64 28.75 64 64v160c0 35.25-28.75 64-64 64s-64-28.7-64-64V96z" />
  </svg>
);

const SvgMicrophone = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMicrophone;
