import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M16 32C7.199 32 0 39.2 0 48v416c0 8.8 7.199 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16zm480 0c-8.8 0-16 7.2-16 16v416c0 8.799 7.199 16 16 16s16-7.201 16-16V48c0-8.8-7.2-16-16-16zM363.3 148.7c-6.25-6.25-16.38-6.25-22.62 0L256 233.4l-84.7-84.7c-6.25-6.25-16.38-6.25-22.62 0s-6.25 16.38 0 22.62L233.4 256l-84.69 84.69c-6.25 6.25-6.25 16.38 0 22.62C151.8 366.4 155.9 368 160 368s8.188-1.562 11.31-4.688L256 278.6l84.69 84.69C343.8 366.4 347.9 368 352 368s8.188-1.562 11.31-4.688c6.25-6.25 6.25-16.38 0-22.62L278.6 256l84.69-84.69c6.31-6.21 6.31-16.41.01-22.61z" />
  </svg>
);

const SvgValueAbsolute = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgValueAbsolute;
