import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm-88 352H152c-13.2 0-24-10.7-24-24V152c0-13.2 10.8-24 24-24s24 10.8 24 24v184h120c13.25 0 24 10.75 24 24s-10.7 24-24 24z" />
  </svg>
);

const SvgSquareLSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareLSolid;
