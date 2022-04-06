import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M48 448c8.84 0 16-7.2 16-16V192c0-88.22 71.78-160 160-160s160 71.78 160 160v240c0 8.844 7.156 16 16 16s16-7.156 16-16l-.001-240c0-105.9-86.13-191.1-192-191.1S31.1 86.13 31.1 192l.9 240c0 8.8 7.16 16 16 16zm384 32H16c-8.836 0-16 7.2-16 16 0 8.836 7.164 16 16 16h416c8.836 0 16-7.164 16-16 0-8.8-7.2-16-16-16z" />
  </svg>
);

const SvgTombstoneBlank = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTombstoneBlank;
