import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M432 480H16c-8.836 0-16 7.2-16 16s7.164 16 16 16h416c8.836 0 16-7.164 16-16 0-8.8-7.2-16-16-16zM48 448c8.84 0 16-7.2 16-16V192c0-88.22 71.78-160 160-160s160 71.78 160 160v240c0 8.844 7.156 16 16 16s16-7.156 16-16l-.001-240C415.1 86.12 329.9 0 223.1 0s-192 86.13-192 192l.9 240c0 8.8 7.16 16 16 16zm175.1-96c9.7 0 16.9-7.2 16.9-16V208h64c8.8 0 16-7.2 16-16s-7.156-16-16-16h-64v-64c0-8.844-7.174-16-16.02-16S208 103.2 208 112v64h-64c-8.8 0-16 7.2-16 16s7.156 16 16 16h64v128c0 8.8 7.2 16 15.1 16z" />
  </svg>
);

const SvgTombstone = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTombstone;
