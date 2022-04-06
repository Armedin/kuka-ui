import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm171.1 139.6C219.3 357 279.3 336 341 336h11c8.8 0 16-7.2 16-16s-7.2-16-16-16h-11c-69.9 0-136 23.5-189.9 66.6l-1.1.9c-6.9 5.5-8.9 15.6-2.5 21.6 5.5 7.8 15.6 8.9 21.6 3.4l2-.9zm5.3-219.6c-17.7 0-32 14.3-32 32s14.3 32 32 32c17.6 0 32-14.3 32-32s-14.4-32-32-32zm160 64c17.6 0 32-14.3 32-32s-14.4-32-32-32c-17.7 0-32 14.3-32 32s14.3 32 32 32z" />
  </svg>
);

const SvgFaceConfusedSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceConfusedSolid;
