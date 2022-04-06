import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M447.1 32h-384C28.64 32-.01 60.65-.01 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96c.01-35.35-27.79-64-63.99-64zm-336 64c26.51 0 48 21.49 48 48s-20.6 48-48 48-48-21.49-48-48 22.38-48 48-48zm335 311.6c-2.8 5.2-8.2 8.4-14.1 8.4H82.01a15.993 15.993 0 0 1-14.26-8.75 16 16 0 0 1 1.334-16.68l70-96C142.1 290.4 146.9 288 152 288s9.916 2.441 12.93 6.574l32.46 44.51 93.3-139.1C293.7 194.7 298.7 192 304 192s10.35 2.672 13.31 7.125l128 192c3.29 4.875 3.59 11.175.79 16.475z" />
  </svg>
);

const SvgImageSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgImageSolid;
