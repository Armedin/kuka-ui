import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M192 288h256c35.35 0 64-28.65 64-64V64c0-35.35-28.65-64-64-64H192c-35.3 0-64 28.65-64 64v160c0 35.3 28.7 64 64 64zm80-256h96v70.13l-40.84-20.44a16.012 16.012 0 0 0-14.31 0L272 102.1V32zM160 64c0-17.64 14.36-32 32-32h48v96c0 5.531 2.875 10.69 7.594 13.62 4.656 2.812 10.59 3.156 15.56.688L320 113.9l56.84 28.44c2.26 1.06 4.76 1.66 7.16 1.66 2.938 0 5.844-.813 8.406-2.375C397.1 138.7 400 133.5 400 128V32h48c17.64 0 32 14.36 32 32v160c0 17.64-14.36 32-32 32H192c-17.6 0-32-14.4-32-32V64zm464 416h-64v-96h64c8.844 0 16-7.156 16-16s-7.2-16-16-16H16c-8.844 0-16 7.2-16 16s7.156 16 16 16h64v96H16c-8.844 0-16 7.2-16 16s7.156 16 16 16h608c8.844 0 16-7.156 16-16s-7.2-16-16-16zm-320 0H112v-96h192v96zm224 0H336v-96h192v96z" />
  </svg>
);

const SvgPalletBox = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPalletBox;
