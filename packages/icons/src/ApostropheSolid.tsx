import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" {...props}>
    <path d="M192 128v96c0 70.58-57.42 128-128 128-17.67 0-32-14.33-32-32s14.33-32 32-32c35.3 0 64-28.7 64-64v-5.9c-10.1 3.6-20.7 5.9-32 5.9-53.02 0-96-43-96-96s42.98-96 96-96 96 42.98 96 96z" />
  </svg>
);

const SvgApostropheSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgApostropheSolid;
