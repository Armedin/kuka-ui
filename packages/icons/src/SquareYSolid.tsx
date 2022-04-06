import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm-37.8 135.6L248 282.2V360c0 13.25-10.75 24-24 24s-24-10.75-24-24v-77.8l-98.2-114.6c-8.64-10-7.49-25.2 2.6-33.8 10.08-8.625 25.22-7.438 33.84 2.594L224 236.5l85.78-100.1c8.641-10.05 23.77-11.27 33.84-2.594C353.7 142.4 354.8 157.6 346.2 167.6z" />
  </svg>
);

const SvgSquareYSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareYSolid;
