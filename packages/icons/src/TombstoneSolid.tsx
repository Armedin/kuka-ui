import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M415.1 191.1c0-105.11-86-191.1-192-191.1s-192 86-192 192l.9 224h384l-.9-224.9zm-95.1.9c0 8.875-7.125 16-16 16h-56.01l.01 128c0 8.875-7.125 16-16 16h-16c-8.875 0-16-7.125-16-16l-.9-128H144c-8.9 0-16-7.1-16-16v-16c0-8.9 7.1-16 16-16h55.99l.01-48c0-8.875 7.125-16 16-16h16c8.875 0 16 7.125 16 16l-.007 47.1L304 160c8.9 0 16 7.1 16 16v16zm112 256H16c-8.875 0-16 7.1-16 16v32c0 8.9 7.125 16 16 16h416c8.875 0 16-7.125 16-16v-32c0-8.9-7.1-16-16-16z" />
  </svg>
);

const SvgTombstoneSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTombstoneSolid;
