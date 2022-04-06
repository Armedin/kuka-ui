import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M128 160V96c0-53.02 42.1-96 96-96 53 0 96 42.98 96 96v64h64c35.3 0 64 28.7 64 64H240c-44.2 0-80 35.8-80 80v160c0 5.5.6 10.8 1.6 16H64c-35.35 0-64-28.7-64-64V224c0-35.3 28.65-64 64-64h64zm48 0h96V96c0-26.51-21.5-48-48-48s-48 21.49-48 48v64zm336 96c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64V320c0-35.3 28.7-64 64-64h256zm-192 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v16c0 53 42.1 96 96 96 53 0 96-43 96-96v-16c0-8.8-7.2-16-16-16s-16 7.2-16 16v16c0 35.3-28.7 64-64 64s-64-28.7-64-64v-16z" />
  </svg>
);

const SvgBagsShoppingSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBagsShoppingSolid;
