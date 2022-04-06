import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M147.8 224h12.11v64c-.01 17.7 14.39 32 31.19 32s31.98-14.33 31.98-31.1V64h32v224c0 17.67 14.35 31.1 32.02 31.1s31.98-14.33 31.98-31.1V64c17.67 0 32-14.33 32-31.1S337.6 0 319.9 0H144.8C80.36 0 32.53 47.41 31.94 110.8 31.37 173.1 85.57 224 147.8 224zM352 384H128v-48c0-6.203-3.595-11.86-9.22-14.48-5.549-2.594-12.24-1.781-17.04 2.188l-96.01 80C2.11 406.8 0 411.3 0 416s2.11 9.25 5.75 12.3l96.01 80c2.94 2.4 6.54 3.7 10.24 3.7 2.299 0 4.633-.5 6.789-1.516C124.4 507.9 128 502.2 128 496v-48h223.1c18.6 0 32.9-14.3 32.9-32.9 0-16.8-14.3-31.1-32-31.1z" />
  </svg>
);

const SvgParagraphLeftSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgParagraphLeftSolid;
