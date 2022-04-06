import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm126.8 246.1c-2.5 6-8.3 9.9-14.8 9.9h-64v96c0 17.67-14.33 32-32 32h-32c-17.67 0-32-14.33-32-32v-96h-64c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.8 3.5-17.4l112-112c6.248-6.248 16.38-6.248 22.62 0l112 112c4.58 4.6 5.98 11.4 3.48 17.4z" />
  </svg>
);

const SvgCircleUpSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleUpSolid;
