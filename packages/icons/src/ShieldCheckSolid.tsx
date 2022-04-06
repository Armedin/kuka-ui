import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m466.5 83.71-192-80C269.625 1.679 261.34.007 256.06.007c-5.312 0-13.55 1.672-18.46 3.703l-191.99 80C27.7 91.1 16 108.6 16 127.1 16 385.2 205.2 512 255.9 512 307.1 512 496 383.8 496 127.1c0-18.5-11.7-36-29.5-43.39zM352 200c0 5.531-1.901 11.09-5.781 15.62l-96 112C243.5 335.5 234.6 335.1 232 335.1a24.04 24.04 0 0 1-16.97-7.031l-48-48C162.3 276.3 160 270.1 160 263.1c0-12.79 10.3-24 24-24a23.93 23.93 0 0 1 16.97 7.031l29.69 29.69 79.13-92.34c4.759-5.532 11.48-8.362 18.24-8.362C346.4 176 352 192.6 352 200z" />
  </svg>
);

const SvgShieldCheckSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShieldCheckSolid;
