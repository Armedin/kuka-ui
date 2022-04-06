import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M352 32c17.7 0 32 14.33 32 32s-14.3 32-32 32H224v87l88.2-22.9c17.2-3.4 34.6 7 38.8 24.1 4.3 17.2-6.1 34.6-23.2 38.8L224 248.1V279l88.2-22.9c17.2-3.4 34.6 7 38.8 24.1 4.3 17.2-6.1 34.6-23.2 38.8L224 344.1V448c0 17.7-14.3 32-32.9 32-16.8 0-32-14.3-32-32v-87.9L71.76 383c-17.14 4.3-34.52-6.1-38.81-23.2-4.28-17.2 6.14-34.6 23.29-39.7L159.1 295v-30.9L71.76 287c-17.14 4.3-34.52-6.1-38.8-23.2-4.29-17.2 6.13-34.6 23.28-39.7L160 199V96H32C14.33 96 0 81.67 0 64s14.33-32 32-32h320z" />
  </svg>
);

const SvgTugrikSignSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTugrikSignSolid;
