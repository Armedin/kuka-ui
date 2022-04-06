import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zM243.7 242.3l72 104c7.547 10.89 4.828 25.84-6.078 33.39A23.622 23.622 0 0 1 296 384c-7.609 0-15.09-3.609-19.75-10.34L206.9 273.4 176 303.9V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.2 10.8-24 24-24s24 10.8 24 24v84.5l103.2-101.6c9.453-9.297 24.67-9.172 33.94.25 9.312 9.453 9.188 24.64-.25 33.94l-71.78 70.69c.79.92 1.89 1.52 2.59 2.52z" />
  </svg>
);

const SvgSquareKSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareKSolid;
