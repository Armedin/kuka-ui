import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M64 352c-35.35 0-64-28.7-64-64V64C0 28.65 28.65 0 64 0h224c35.3 0 64 28.65 64 64v96h96c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64v-96H64zm128-32v128c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H320V64c0-17.67-14.3-32-32-32H64c-17.67 0-32 14.33-32 32v224c0 17.7 14.33 32 32 32h128z" />
  </svg>
);

const SvgObjectUnion = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgObjectUnion;
