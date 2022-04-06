import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm19.7 242.3 72 104c7.547 10.89 4.828 25.84-6.078 33.39A23.622 23.622 0 0 1 328 384c-7.609 0-15.09-3.609-19.75-10.34L238.9 273.4 208 303.9V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.2 10.8-24 24-24s24 10.8 24 24v84.5l103.2-101.6c9.453-9.297 24.67-9.172 33.94.25 9.312 9.453 9.188 24.64-.25 33.94l-71.78 70.69c.79.92 1.89 1.52 2.59 2.52z" />
  </svg>
);

const SvgCircleKSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleKSolid;
