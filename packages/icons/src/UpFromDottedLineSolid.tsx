import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M377.4 183.5c6.6 7 8.4 17.2 4.6 26-3.8 8.8-12.4 14.5-22 14.5h-72v128c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32V224H88a24 24 0 0 1-22.04-14.5c-3.79-8.8-1.99-19 4.59-26L206.6 39.52c4.5-4.8 10.8-7.52 17.4-7.52 6.6 0 12.9 2.72 17.4 7.52l136 143.98zM0 448c0-17.7 14.33-32 32-32s32 14.3 32 32-14.33 32-32 32-32-14.3-32-32zm160 0c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm32 0c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm160 0c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm32 0c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32z" />
  </svg>
);

const SvgUpFromDottedLineSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUpFromDottedLineSolid;
