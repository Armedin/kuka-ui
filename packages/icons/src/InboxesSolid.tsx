import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M480 352h-96l-32 64H160l-32-64H32c-17.67 0-32 14.33-32 32v80c0 26.5 21.49 48 48 48h416c26.51 0 48-21.49 48-48v-80c0-17.7-14.3-32-32-32zm27.7-171.1L445.71 20.1C440.8 7.969 429.1 0 416 0H96C82.91 0 71.16 7.969 66.28 20.12L4.287 180.9A63.548 63.548 0 0 0 0 203.9v67.2c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48v-67.2c0-7.9-1.5-15.7-4.3-23zM384 160l-32 64H160l-32-64H79.27l38.39-96h276.7l38.39 96H384z" />
  </svg>
);

const SvgInboxesSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgInboxesSolid;
