import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256zm-335.6-48c-17.7 0-32 14.3-32 32s14.3 32 32 32c17.6 0 32-14.3 32-32s-14.4-32-32-32zm160 64c17.6 0 32-14.3 32-32s-14.4-32-32-32c-17.7 0-32 14.3-32 32s14.3 32 32 32zM160 368h192c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16s7.2 16 16 16zm168.8-226.2c10.7-10.7 28.6-8.9 37 3.7l4.9 7.4c4.9 7.3 14.8 9.3 22.2 4.4 7.3-4.9 9.3-14.8 4.4-22.2l-4.9-7.4c-19.6-29.38-61.2-33.5-86.2-8.5l-29.5 29.5c-6.3 6.2-6.3 16.4 0 22.6 6.2 6.3 16.4 6.3 22.6 0l29.5-29.5zM128 144c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64z" />
  </svg>
);

const SvgFaceRaisedEyebrowSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFaceRaisedEyebrowSolid;
