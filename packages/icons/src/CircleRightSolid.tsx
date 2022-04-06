import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256s114.6 256 256 256 256-114.6 256-256zM265.9 382.8c-6-2.5-9.9-8.3-9.9-14.8v-64h-96c-17.67 0-32-14.33-32-32v-32c0-17.67 14.33-32 32-32h96v-64c0-6.469 3.891-12.31 9.875-14.78a15.988 15.988 0 0 1 17.44 3.469l112 112c6.248 6.248 6.248 16.38 0 22.62l-112 112C278.7 383.9 271.9 385.3 265.9 382.8z" />
  </svg>
);

const SvgCircleRightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleRightSolid;
