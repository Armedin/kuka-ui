import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 256C0 114.6 114.6 0 256 0s256 114.6 256 256-114.6 256-256 256S0 397.4 0 256zm316.1 138.7c5.9 6.6 16 7.1 22.6 1.2 6.6-6.8 7.1-16 1.2-22.6-16.1-17.9-44.2-37.3-84.8-37.3-38.8 0-66.9 19.4-83 37.3-5.9 6.6-5.4 15.8 1.2 22.6 6.6 5.9 15.8 5.4 22.6-1.2 11.7-13 31.6-26.7 59.2-26.7 29.4 0 49.3 13.7 61 26.7zM112 192c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c0 17.7 14.3 32 32 32s32-14.3 32-32-14.3-32-32-32h-64zm192 32h32c0 17.7 14.3 32 32 32s32-14.3 32-32-14.3-32-32-32h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16z" />
  </svg>
);

const SvgFaceUnamusedSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceUnamusedSolid;
