import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm-32 328c0 13.25-10.75 24-24 24s-24-10.75-24-24V226.2l-60.55 83.83c-9.031 12.5-29.88 12.5-38.91 0L144 226.2V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-10.41 6.719-19.64 16.61-22.83 9.859-3.25 20.75.313 26.84 8.781L224 255l84.55-117.1c6.094-8.469 16.89-12.03 26.84-8.781C345.3 132.4 352 141.6 352 152v208z" />
  </svg>
);

const SvgSquareMSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareMSolid;
