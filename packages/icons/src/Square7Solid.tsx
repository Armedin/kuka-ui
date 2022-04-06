import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm-66.9 131.4-112 208c-4.3 8-12.6 12.6-22 12.6-3.844 0-7.719-.906-11.34-2.875-11.69-6.281-16.03-20.84-9.75-32.5L255.8 176H152c-13.2 0-24-10.7-24-24s10.8-24 24-24h144c8.438 0 16.28 4.438 20.59 11.69 4.31 7.21 4.51 16.21.51 23.71z" />
  </svg>
);

const SvgSquare7Solid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquare7Solid;
