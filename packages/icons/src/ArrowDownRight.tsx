import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M320 176v223.3c0 8.812-7.141 15.97-15.95 16l-224 .656C71.23 416 64.03 408.9 64 400c-.031-8.812 7.109-16 15.95-16.03l185.6-.555L4.688 122.6c-6.25-6.25-6.25-16.38 0-22.62s16.38-6.25 22.62 0L288 360.6V176c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
  </svg>
);

const SvgArrowDownRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowDownRight;
