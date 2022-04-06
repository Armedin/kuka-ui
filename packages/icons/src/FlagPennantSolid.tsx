import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M64 496c0 8.8-7.16 16-16 16H16c-8.836 0-16-7.2-16-16V32C0 14.33 14.33 0 32 0s32 14.33 32 32v464zM62.74 25.73C63.17 27.83 64 29.78 64 32v-5.8l-1.26-.47zM496.3 185.5 96 37.99v340l400.3-147.5C505.7 227 512 218.1 512 208s-6.3-19.9-15.7-22.5z" />
  </svg>
);

const SvgFlagPennantSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFlagPennantSolid;
