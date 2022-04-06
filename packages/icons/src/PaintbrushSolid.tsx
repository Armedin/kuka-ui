import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M224 263.3c.2-30 14.4-58.1 38.4-76.1L499.1 9.605c18.6-13.958 44.5-12.57 61.6 3.295 17 15.86 20.1 41.64 7.5 61.17L406.5 324.1c-15.2 23.6-39.9 39.1-67.2 43L224 263.3zM320 400c0 61.9-50.1 112-112 112H64c-17.67 0-32-14.3-32-32s14.33-32 32-32h4.81c17.63 0 29.59-18.9 27.78-36.4-.39-3.8-.59-7.7-.59-11.6 0-60.4 47.9-109.7 107.7-111.9l116.1 104.4c.1 1.6.2 5 .2 7.5z" />
  </svg>
);

const SvgPaintbrushSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPaintbrushSolid;
