import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="M160 160H96c-35.35 0-64 28.7-64 64v96c0 17.67 14.33 32 32 32v128c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V352c17.67 0 32-14.33 32-32v-96c0-35.3-28.7-64-64-64zm-32-32c35.38 0 64-28.62 64-64S163.38 0 128 0 64 28.62 64 64s28.63 64 64 64z" />
  </svg>
);

const SvgPersonSimpleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPersonSimpleSolid;
